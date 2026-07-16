import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function DataPeserta() {
  const navigate = useNavigate();
  const [namaAdmin, setNamaAdmin] = useState("Admin");

  // State utama peserta membaca data langsung dari localStorage agar sinkron dengan Dashboard
  // Jika masih kosong, ia akan memulai dari array kosong [] bukan dummy data lagi.
  const [peserta, setPeserta] = useState(() => {
    const dataLokal = localStorage.getItem("data_peserta");
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

  const [form, setForm] = useState({
    nim: "",
    nama: "",
    prodi: "",
    angkatan: "",
    kelas: "",
    status: "Aktif",
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const simpanPeserta = () => {
    if (
      form.nim === "" ||
      form.nama === "" ||
      form.prodi === "" ||
      form.angkatan === "" ||
      form.kelas === ""
    ) {
      alert("Semua data wajib diisi!");
      return;
    }

    let dataTerbaru = [];

    if (editId) {
      // 1. Kasus Edit Data
      dataTerbaru = peserta.map((item) =>
        item.id === editId ? { ...item, ...form } : item
      );
      setPeserta(dataTerbaru);
      localStorage.setItem("data_peserta", JSON.stringify(dataTerbaru));
      alert("Data berhasil diperbarui");
    } else {
      // 2. Kasus Tambah Data Baru (Maka Dashboard akan otomatis mendeteksi bertambah 1)
      dataTerbaru = [
        ...peserta,
        {
          id: Date.now(),
          ...form,
          status_verifikasi: "Menunggu" // Properti tambahan untuk memantau status verifikasi di Dashboard
        },
      ];
      setPeserta(dataTerbaru);
      localStorage.setItem("data_peserta", JSON.stringify(dataTerbaru));

      // Membuat log input aktivitas baru agar tercatat di panel kanan dashboard
      const logLama = JSON.parse(localStorage.getItem("log_aktivitas")) || [];
      const logBaru = [
        {
          id: Date.now(),
          tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          judul: "Input Peserta Baru",
          deskripsi: `Peserta atas nama ${form.nama} (${form.nim}) berhasil ditambahkan ke sistem.`
        },
        ...logLama
      ];
      localStorage.setItem("log_aktivitas", JSON.stringify(logBaru.slice(0, 5)));

      alert("Data berhasil ditambahkan");
    }

    resetForm();
  };

  const editPeserta = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const hapusPeserta = (id) => {
    if (window.confirm("Yakin ingin menghapus peserta?")) {
      const dataTerbaru = peserta.filter((item) => item.id !== id);
      setPeserta(dataTerbaru);
      // Sinkronisasikan perubahan hapus ke localStorage
      localStorage.setItem("data_peserta", JSON.stringify(dataTerbaru));
    }
  };

  const resetForm = () => {
    setForm({
      nim: "",
      nama: "",
      prodi: "",
      angkatan: "",
      kelas: "",
      status: "Aktif",
    });
    setEditId(null);
  };

  const dataFilter = peserta.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.nim.toLowerCase().includes(search.toLowerCase())
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

        <div
          style={{
            backgroundColor: "#047857",
            padding: "12px 15px",
            borderRadius: "12px",
            marginBottom: "25px",
          }}
        >
          <span style={{ fontSize: "11px", color: "#a7f3d0", display: "block" }}>
            LOGIN SEBAGAI
          </span>
          <strong style={{ color: "#fff", fontSize: "14px" }}>👤 ADMIN</strong>
        </div>

        {/* Menu Navigasi Sidebar */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
          <Link to="/admin" style={sidebarLink}>
            🏠 Dashboard
          </Link>
          <Link to="/admin/peserta" style={sidebarLinkActive}>
            👥 Kelola Data Peserta
          </Link>
          <Link to="/admin/verifikasi" style={sidebarLink}>
            ✅ Verifikasi Pendaftaran
          </Link>
          <Link to="/admin/jadwal" style={sidebarLink}>
            📅 Kelola Jadwal
          </Link>
          <Link to="/admin/pengajar" style={sidebarLink}>
            👨‍🏫 Kelola Data Pengajar
          </Link>
          <Link to="/admin/pengumuman" style={sidebarLink}>
            📢 Kelola Pengumuman
          </Link>
        </nav>

        {/* Tombol Logout */}
        <button onClick={handleLogout} style={logoutButtonStyle}>
          🚪 Keluar Sistem
        </button>
      </div>

      {/* ================= KONTEN UTAMA ================= */}
      <div style={{ flexGrow: 1, padding: "30px", overflowY: "auto" }}>
        
        {/* Header Halaman */}
        <div style={{ marginBottom: "25px" }}>
          <h1 style={{ color: "#064e3b", margin: "0 0 5px 0", fontSize: "28px", fontWeight: "bold" }}>
            👥 Kelola Data Peserta BTA
          </h1>
          <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>
            Kelola data peserta SIBTQ Universitas Nurul Huda secara lengkap dan terstruktur.
          </p>
        </div>

        {/* Card Formulir & Tabel */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ color: "#064e3b", marginTop: 0, marginBottom: "15px", fontWeight: "bold" }}>
            {editId ? "🔄 Edit Data Peserta" : "✨ Tambah Peserta Baru"}
          </h3>

          <input
            type="text"
            placeholder="NIM"
            value={form.nim}
            onChange={(e) => setForm({ ...form, nim: e.target.value })}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Nama Peserta"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Program Studi"
            value={form.prodi}
            onChange={(e) => setForm({ ...form, prodi: e.target.value })}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Angkatan"
            value={form.angkatan}
            onChange={(e) => setForm({ ...form, angkatan: e.target.value })}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Kelas BTA"
            value={form.kelas}
            onChange={(e) => setForm({ ...form, kelas: e.target.value })}
            style={inputStyle}
          />

          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            style={{ ...inputStyle, backgroundColor: "#fff" }}
          >
            <option>Aktif</option>
            <option>Tidak Aktif</option>
          </select>

          <div style={{ marginBottom: "20px" }}>
            <button onClick={simpanPeserta} style={btnHijau}>
              {editId ? "Update Peserta" : "Simpan Peserta"}
            </button>
            <button onClick={resetForm} style={btnKuning}>
              Reset Form
            </button>
          </div>

          <hr style={{ margin: "30px 0", border: "0", borderTop: "1px solid #e2e8f0" }} />

          {/* Kolom Pencarian */}
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#064e3b", margin: "0 0 10px 0", fontWeight: "bold" }}>
              📋 Daftar Peserta SIBTQ
            </h3>
            <input
              type="text"
              placeholder="🔍 Cari NIM atau Nama..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Tabel Data */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#064e3b", color: "white" }}>
              <tr>
                <th style={thStyle}>No</th>
                <th style={thStyle}>NIM</th>
                <th style={thStyle}>Nama</th>
                <th style={thStyle}>Program Studi</th>
                <th style={thStyle}>Angkatan</th>
                <th style={thStyle}>Kelas</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataFilter.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{item.nim}</td>
                  <td style={tdStyle}>{item.nama}</td>
                  <td style={tdStyle}>{item.prodi}</td>
                  <td style={tdStyle}>{item.angkatan}</td>
                  <td style={tdStyle}>{item.kelas}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        backgroundColor: item.status === "Aktif" ? "#d1e7dd" : "#f8d7da",
                        color: item.status === "Aktif" ? "#0f5132" : "#842029",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <button style={btnBiru} onClick={() => editPeserta(item)}>
                      Edit
                    </button>
                    <button style={btnMerah} onClick={() => hapusPeserta(item.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}

              {dataFilter.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ ...tdStyle, padding: "20px", color: "#64748b" }}>
                    Data peserta tidak ditemukan. Silakan tambahkan peserta baru.
                  </td>
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
const sidebarLink = {
  display: "block",
  padding: "12px 15px",
  color: "#d1fae5",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all 0.2s",
};

const sidebarLinkActive = {
  ...sidebarLink,
  backgroundColor: "#047857",
  color: "#fff",
  fontWeight: "bold",
};

const logoutButtonStyle = {
  padding: "12px",
  backgroundColor: "rgba(239, 68, 68, 0.1)",
  color: "#f87171",
  border: "1px solid rgba(239, 68, 68, 0.2)",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  marginTop: "20px",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const btnHijau = {
  background: "#198754",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
  fontWeight: "bold",
};

const btnKuning = {
  background: "#ffc107",
  color: "black",
  border: "none",
  padding: "10px 18px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const btnBiru = {
  background: "#0d6efd",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "8px",
  fontWeight: "bold",
};

const btnMerah = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default DataPeserta;