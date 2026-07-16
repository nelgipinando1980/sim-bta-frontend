import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Verifikasi() {
  const navigate = useNavigate();
  const [namaAdmin, setNamaAdmin] = useState("Admin");

  // State membaca data langsung dari localStorage (sinkron dengan Kelola Data Peserta)
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

  const ubahStatus = (id, statusBaru) => {
    // 1. Update status pada state komponen
    const dataTerbaru = peserta.map((item) =>
      item.id === id ? { ...item, status_verifikasi: statusBaru } : item
    );
    setPeserta(dataTerbaru);
    
    // 2. Simpan kembali data terbaru ke localStorage agar Dashboard & Kelola Peserta ikut ter-update
    localStorage.setItem("data_peserta", JSON.stringify(dataTerbaru));

    // 3. Menambahkan log aktivitas ke dashboard saat aksi verifikasi dilakukan
    const dataTerverifikasi = dataTerbaru.find(item => item.id === id);
    if (dataTerverifikasi) {
      const logLama = JSON.parse(localStorage.getItem("log_aktivitas")) || [];
      
      // Mengambil jam dan tanggal realtime Indonesia untuk keperluan log dashboard
      const waktuSekarang = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
      const tanggalSekarang = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

      const logBaru = [
        {
          id: Date.now().toString(), // String ID untuk menghindari isu key map di React
          tanggal: `${tanggalSekarang} - ${waktuSekarang} WIB`,
          judul: `Pendaftaran ${statusBaru}`,
          deskripsi: `Peserta atas nama ${dataTerverifikasi.nama} (${dataTerverifikasi.nim}) telah ${statusBaru.toLowerCase()} oleh Admin.`
        },
        ...logLama
      ];
      
      // Membatasi history log agar hanya menyimpan maksimal 5 aktivitas terbaru
      localStorage.setItem("log_aktivitas", JSON.stringify(logBaru.slice(0, 5)));
    }
    
    alert(`Status pendaftaran ${dataTerverifikasi?.nama} berhasil diperbarui menjadi: ${statusBaru}`);
  };

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
          <Link to="/admin/verifikasi" style={sidebarLinkActive}>
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
            ✅ Verifikasi Pendaftaran Peserta
          </h1>
          <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>
            Periksa dan tentukan status validasi berkas pendaftaran calon peserta SIBTQ.
          </p>
        </div>

        {/* Card Panel Tabel */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
            border: "1px solid #e2e8f0",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#064e3b", color: "white" }}>
              <tr>
                <th style={thStyle}>No</th>
                <th style={thStyle}>Nama</th>
                <th style={thStyle}>NIM</th>
                <th style={thStyle}>Program Studi</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {peserta.map((item, index) => {
                const statusAktif = item.status_verifikasi || "Menunggu";

                return (
                  <tr key={item.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={{ ...tdStyle, fontWeight: "500" }}>{item.nama}</td>
                    <td style={tdStyle}>{item.nim}</td>
                    <td style={tdStyle}>{item.prodi}</td>

                    <td style={tdStyle}>
                      <span
                        style={{
                          padding: "6px 15px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "bold",
                          display: "inline-block",
                          color:
                            statusAktif === "Diterima"
                              ? "#0f5132"
                              : statusAktif === "Ditolak"
                              ? "#842029"
                              : "#664d03",
                          background:
                            statusAktif === "Diterima"
                              ? "#d1e7dd"
                              : statusAktif === "Ditolak"
                              ? "#f8d7da"
                              : "#fff3cd",
                        }}
                      >
                        {statusAktif}
                      </span>
                    </td>

                    <td style={tdStyle}>
                      <button
                        style={{
                          ...btnHijau,
                          opacity: statusAktif === "Diterima" ? 0.6 : 1,
                          cursor: statusAktif === "Diterima" ? "not-allowed" : "pointer"
                        }}
                        disabled={statusAktif === "Diterima"}
                        onClick={() => ubahStatus(item.id, "Diterima")}
                      >
                        ✔ Terima
                      </button>

                      <button
                        style={{
                          ...btnMerah,
                          opacity: statusAktif === "Ditolak" ? 0.6 : 1,
                          cursor: statusAktif === "Ditolak" ? "not-allowed" : "pointer"
                        }}
                        disabled={statusAktif === "Ditolak"}
                        onClick={() => ubahStatus(item.id, "Ditolak")}
                      >
                        ✖ Tolak
                      </button>
                    </td>
                  </tr>
                );
              })}

              {peserta.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ ...tdStyle, padding: "20px", color: "#64748b" }}>
                    Belum ada data pendaftar untuk diverifikasi. Silakan isi melalui Kelola Data Peserta.
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

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const btnHijau = {
  background: "#198754",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "10px",
  fontWeight: "bold",
  transition: "opacity 0.2s"
};

const btnMerah = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "8px 15px",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "opacity 0.2s"
};

export default Verifikasi;