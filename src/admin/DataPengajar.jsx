import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function DataPengajar() {
  const navigate = useNavigate();
  const [namaAdmin, setNamaAdmin] = useState("Admin");

  // State membaca data langsung dari localStorage agar data tidak hilang saat refresh
  const [pengajar, setPengajar] = useState(() => {
    const dataLokal = localStorage.getItem("data_pengajar");
    return dataLokal ? JSON.parse(dataLokal) : [];
  });

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (nama) {
      setNamaAdmin(nama);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [form, setForm] = useState({ nip: "", nama: "", mataKuliah: "", status: "Aktif" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const simpanPengajar = () => {
    if (form.nip === "" || form.nama === "" || form.mataKuliah === "") {
      alert("Semua data wajib diisi!");
      return;
    }

    let dataTerbaru = [];

    if (editId) {
      // 1. Kasus Edit Data Pengajar
      dataTerbaru = pengajar.map((item) => item.id === editId ? { ...item, ...form } : item);
      setPengajar(dataTerbaru);
      localStorage.setItem("data_pengajar", JSON.stringify(dataTerbaru));
      alert("Data berhasil diperbarui");
    } else {
      // 2. Kasus Tambah Pengajar Baru
      dataTerbaru = [...pengajar, { id: Date.now(), ...form }];
      setPengajar(dataTerbaru);
      localStorage.setItem("data_pengajar", JSON.stringify(dataTerbaru));

      // Membuat log input aktivitas baru untuk dashboard
      const logLama = JSON.parse(localStorage.getItem("log_aktivitas")) || [];
      const logBaru = [
        {
          id: Date.now(),
          tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          judul: "Tambah Pengajar Baru",
          deskripsi: `Data pengajar baru dengan nama ${form.nama} telah ditambahkan ke sistem.`
        },
        ...logLama
      ];
      localStorage.setItem("log_aktivitas", JSON.stringify(logBaru.slice(0, 5)));

      alert("Data berhasil ditambahkan");
    }
    resetForm();
  };

  const editPengajar = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const hapusPengajar = (id) => {
    if (window.confirm("Yakin ingin menghapus data?")) {
      const dataTerbaru = pengajar.filter((item) => item.id !== id);
      setPengajar(dataTerbaru);
      localStorage.setItem("data_pengajar", JSON.stringify(dataTerbaru));
    }
  };

  const resetForm = () => {
    setForm({ nip: "", nama: "", mataKuliah: "", status: "Aktif" });
    setEditId(null);
  };

  const dataFilter = pengajar.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.nip.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      
      {/* ================= SIDEBAR ADMIN ================= */}
      <div
        style={{
          width: "260px",
          backgroundColor: "#064e3b",
          padding: "25px 15px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "30px", paddingLeft: "10px" }}>
          <h2 style={{ color: "#fff", margin: 0, fontSize: "22px", fontWeight: "bold" }}>SIM BTA</h2>
          <p style={{ color: "#34d399", fontSize: "12px", margin: "2px 0 0 0" }}>Universitas Nurul Huda</p>
        </div>

        <div style={{ backgroundColor: "#047857", padding: "12px 15px", borderRadius: "12px", marginBottom: "25px" }}>
          <span style={{ fontSize: "11px", color: "#a7f3d0", display: "block" }}>LOGIN SEBAGAI</span>
          <strong style={{ color: "#fff", fontSize: "14px" }}>👤 ADMIN</strong>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
          <Link to="/admin" style={sidebarLink}>🏠 Dashboard</Link>
          <Link to="/admin/peserta" style={sidebarLink}>👥 Kelola Data Peserta</Link>
          <Link to="/admin/verifikasi" style={sidebarLink}>✅ Verifikasi Pendaftaran</Link>
          <Link to="/admin/jadwal" style={sidebarLink}>📅 Kelola Jadwal</Link>
          <Link to="/admin/pengajar" style={sidebarLinkActive}>👨‍🏫 Kelola Data Pengajar</Link>
          <Link to="/admin/pengumuman" style={sidebarLink}>📢 Kelola Pengumuman</Link>
        </nav>

        <button onClick={handleLogout} style={logoutButtonStyle}>🚪 Keluar Sistem</button>
      </div>

      {/* ================= KONTEN UTAMA ================= */}
      <div style={{ flexGrow: 1, padding: "30px", overflowY: "auto" }}>
        <div style={{ marginBottom: "25px" }}>
          <h1 style={{ color: "#064e3b", margin: "0 0 5px 0", fontSize: "28px", fontWeight: "bold" }}>
            👨‍🏫 Kelola Data Pengajar BTA
          </h1>
          <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>
            Pusat data informasi instruktur dan pengajar BTA Universitas Nurul Huda.
          </p>
        </div>

        <div style={{ background: "#fff", padding: "25px", borderRadius: "16px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
          <h3 style={{ color: "#064e3b", marginTop: 0, marginBottom: "15px", fontWeight: "bold" }}>
            {editId ? "🔄 Edit Data Pengajar" : "✨ Tambah Pengajar Baru"}
          </h3>

          <input type="text" placeholder="NIP" value={form.nip} onChange={(e) => setForm({ ...form, nip: e.target.value })} style={inputStyle} />
          <input type="text" placeholder="Nama Pengajar" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} style={inputStyle} />
          <input type="text" placeholder="Mata Pelajaran" value={form.mataKuliah} onChange={(e) => setForm({ ...form, mataKuliah: e.target.value })} style={inputStyle} />
          
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} style={{ ...inputStyle, backgroundColor: "#fff" }}>
            <option value="Aktif">Aktif</option>
            <option value="Tidak Aktif">Tidak Aktif</option>
          </select>

          <div style={{ marginBottom: "20px" }}>
            <button onClick={simpanPengajar} style={btnHijau}>{editId ? "Update Data" : "Simpan Data"}</button>
            <button onClick={resetForm} style={btnKuning}>Reset Form</button>
          </div>

          <hr style={{ margin: "30px 0", border: "0", borderTop: "1px solid #e2e8f0" }} />

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#064e3b", margin: "0 0 10px 0", fontWeight: "bold" }}>📋 Daftar Pengajar SIBTQ</h3>
            <input type="text" placeholder="🔍 Cari NIP atau Nama..." value={search} onChange={(e) => setSearch(e.target.value)} style={inputStyle} />
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#064e3b", color: "white" }}>
              <tr>
                <th style={thStyle}>No</th>
                <th style={thStyle}>NIP</th>
                <th style={thStyle}>Nama</th>
                <th style={thStyle}>Mata Pelajaran</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataFilter.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{item.nip}</td>
                  <td style={tdStyle}>{item.nama}</td>
                  <td style={tdStyle}>{item.mataKuliah}</td>
                  <td style={tdStyle}>
                    <span style={{ padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "bold", backgroundColor: item.status === "Aktif" ? "#d1e7dd" : "#f8d7da", color: item.status === "Aktif" ? "#0f5132" : "#842029" }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <button style={btnBiru} onClick={() => editPengajar(item)}>Edit</button>
                    <button style={btnMerah} onClick={() => hapusPengajar(item.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
              {dataFilter.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ ...tdStyle, padding: "20px", color: "#64748b" }}>Data pengajar tidak ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================= INTERNAL LOCAL STYLES ================= */
const sidebarLink = { display: "block", padding: "12px 15px", color: "#d1fae5", textDecoration: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "500" };
const sidebarLinkActive = { ...sidebarLink, backgroundColor: "#047857", color: "#fff", fontWeight: "bold" };
const logoutButtonStyle = { padding: "12px", backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#f87171", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "14px", marginTop: "20px", display: "flex", alignItems: "center", gap: "8px" };

const inputStyle = { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box" };
const thStyle = { padding: "12px", border: "1px solid #ddd" };
const tdStyle = { padding: "10px", border: "1px solid #ddd", textAlign: "center" };

const btnHijau = { background: "#198754", color: "white", border: "none", padding: "10px 18px", borderRadius: "5px", cursor: "pointer", marginRight: "10px", fontWeight: "bold" };
const btnKuning = { background: "#ffc107", color: "black", border: "none", padding: "10px 18px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" };
const btnBiru = { background: "#0d6efd", color: "white", border: "none", padding: "8px 14px", borderRadius: "5px", cursor: "pointer", marginRight: "8px", fontWeight: "bold" };
const btnMerah = { background: "#dc3545", color: "white", border: "none", padding: "8px 14px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" };

export default DataPengajar;