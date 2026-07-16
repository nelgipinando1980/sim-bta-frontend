import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Pengumuman() {
  const navigate = useNavigate();
  const [namaAdmin, setNamaAdmin] = useState("Admin");

  // State membaca data langsung dari localStorage agar tersinkronisasi dan tidak hilang saat refresh
  const [pengumuman, setPengumuman] = useState(() => {
    const dataLokal = localStorage.getItem("data_pengumuman");
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
    judul: "",
    isi: "",
    tanggal: "",
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const simpanPengumuman = () => {
    if (
      form.judul === "" ||
      form.isi === "" ||
      form.tanggal === ""
    ) {
      alert("Semua data wajib diisi!");
      return;
    }

    let dataTerbaru = [];

    if (editId) {
      // 1. Kasus Edit Pengumuman
      dataTerbaru = pengumuman.map((item) =>
        item.id === editId ? { ...item, ...form } : item
      );
      setPengumuman(dataTerbaru);
      localStorage.setItem("data_pengumuman", JSON.stringify(dataTerbaru));
      alert("Pengumuman berhasil diperbarui");
    } else {
      // 2. Kasus Tambah Pengumuman Baru
      dataTerbaru = [
        ...pengumuman,
        {
          id: Date.now(),
          ...form,
        },
      ];
      setPengumuman(dataTerbaru);
      localStorage.setItem("data_pengumuman", JSON.stringify(dataTerbaru));

      // Membuat log input aktivitas baru untuk dashboard
      const logLama = JSON.parse(localStorage.getItem("log_aktivitas")) || [];
      const logBaru = [
        {
          id: Date.now(),
          tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          judul: "Tambah Pengumuman",
          deskripsi: `Pengumuman baru "${form.judul}" telah diterbitkan.`
        },
        ...logLama
      ];
      localStorage.setItem("log_aktivitas", JSON.stringify(logBaru.slice(0, 5)));

      alert("Pengumuman berhasil ditambahkan");
    }

    resetForm();
  };

  const editPengumuman = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const hapusPengumuman = (id) => {
    if (window.confirm("Yakin ingin menghapus pengumuman?")) {
      const dataTerbaru = pengumuman.filter((item) => item.id !== id);
      setPengumuman(dataTerbaru);
      localStorage.setItem("data_pengumuman", JSON.stringify(dataTerbaru));
    }
  };

  const resetForm = () => {
    setForm({
      judul: "",
      isi: "",
      tanggal: "",
    });
    setEditId(null);
  };

  const dataFilter = pengumuman.filter(
    (item) =>
      item.judul.toLowerCase().includes(search.toLowerCase()) ||
      item.isi.toLowerCase().includes(search.toLowerCase())
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
          <Link to="/admin/peserta" style={sidebarLink}>
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
          <Link to="/admin/pengumuman" style={sidebarLinkActive}>
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
            📢 Kelola Pengumuman SIM BTA
          </h1>
          <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>
            Buat, edit, dan bagikan informasi akademis penting ke seluruh sivitas akademika Universitas Nurul Huda.
          </p>
        </div>

        {/* Card Panel Formulir & Tabel */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ color: "#064e3b", marginTop: 0, marginBottom: "15px", fontWeight: "bold" }}>
            {editId ? "🔄 Edit Informasi Pengumuman" : "✨ Tambah Pengumuman Baru"}
          </h3>

          <input
            type="text"
            placeholder="Judul Pengumuman"
            value={form.judul}
            onChange={(e) => setForm({ ...form, judul: e.target.value })}
            style={inputStyle}
          />

          <textarea
            rows="4"
            placeholder="Isi Informasi Pengumuman..."
            value={form.isi}
            onChange={(e) => setForm({ ...form, isi: e.target.value })}
            style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
          />

          <input
            type="date"
            value={form.tanggal}
            onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
            style={inputStyle}
          />

          <div style={{ marginBottom: "20px" }}>
            <button onClick={simpanPengumuman} style={btnHijau}>
              {editId ? "Update Pengumuman" : "Tambah Pengumuman"}
            </button>
            <button onClick={resetForm} style={btnKuning}>
              Reset Form
            </button>
          </div>

          <hr style={{ margin: "30px 0", border: "0", borderTop: "1px solid #e2e8f0" }} />

          {/* Kolom Pencarian */}
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#064e3b", margin: "0 0 10px 0", fontWeight: "bold" }}>
              📋 Arsip Informasi Pengumuman
            </h3>
            <input
              type="text"
              placeholder="🔍 Cari Pengumuman..."
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
                <th style={thStyle}>Judul</th>
                <th style={thStyle}>Isi</th>
                <th style={thStyle}>Tanggal</th>
                <th style={thStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataFilter.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={{ ...tdStyle, fontWeight: "600", textAlign: "left" }}>{item.judul}</td>
                  <td style={{ ...tdStyle, textAlign: "left", maxWidth: "400px" }}>{item.isi}</td>
                  <td style={tdStyle}>{item.tanggal}</td>
                  <td style={tdStyle}>
                    <button style={btnBiru} onClick={() => editPengumuman(item)}>
                      Edit
                    </button>
                    <button style={btnMerah} onClick={() => hapusPengumuman(item.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}

              {dataFilter.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ ...tdStyle, padding: "20px", color: "#64748b" }}>
                    Belum ada pengumuman yang sesuai kata kunci.
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
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
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

export default Pengumuman;