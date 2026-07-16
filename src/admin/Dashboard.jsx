import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [namaAdmin, setNamaAdmin] = useState("Admin");
  
  // State statistik awal diset 0 murni sebelum ada inputan sistem
  const [stats, setStats] = useState({
    totalPeserta: 0,
    menungguVerifikasi: 0,
    totalPengajar: 0,
    kelasBerjalan: 0
  });

  // Log aktivitas dimulai dari array kosong
  const [aktivitasTerbaru, setAktivitasTerbaru] = useState([]);

  useEffect(() => {
    // 1. Mengambil nama admin login
    const nama = localStorage.getItem("nama");
    if (nama) {
      setNamaAdmin(nama);
    }

    // 2. Memantau data input secara riil dari localStorage
    const dataPesertaLokal = JSON.parse(localStorage.getItem("data_peserta")) || [];
    const dataPengajarLokal = JSON.parse(localStorage.getItem("data_pengajar")) || [];
    const dataJadwalLokal = JSON.parse(localStorage.getItem("data_jadwal")) || [];
    
    // Hitung status verifikasi berdasarkan data yang diinput
    const jmlMenunggu = dataPesertaLokal.filter(
      (p) => p.status_verifikasi === "Menunggu" || p.status === "Pending"
    ).length;

    // Set ke state (Otomatis 0 jika data_peserta/pengajar/jadwal di localStorage masih kosong)
    setStats({
      totalPeserta: dataPesertaLokal.length,
      menungguVerifikasi: jmlMenunggu,
      totalPengajar: dataPengajarLokal.length,
      kelasBerjalan: dataJadwalLokal.length
    });

    // 3. Mengambil riwayat aktivitas terbaru hasil inputan
    const logAktivitas = JSON.parse(localStorage.getItem("log_aktivitas")) || [];
    setAktivitasTerbaru(logAktivitas);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
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
          <strong style={{ color: "#fff", fontSize: "14px" }}>👤 {namaAdmin}</strong>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
          <Link to="/admin" style={sidebarLinkActive}>
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
          <Link to="/admin/pengumuman" style={sidebarLink}>
            📢 Kelola Pengumuman
          </Link>
        </nav>

        <button onClick={handleLogout} style={logoutButtonStyle}>
          🚪 Keluar Sistem
        </button>
      </div>

      {/* ================= KONTEN UTAMA DASHBOARD ================= */}
      <div style={{ flexGrow: 1, padding: "30px", overflowY: "auto" }}>
        
        {/* Banner Selamat Datang */}
        <div
          style={{
            background: "linear-gradient(135deg, #064e3b, #047857)",
            borderRadius: "20px",
            padding: "30px",
            color: "white",
            boxShadow: "0 10px 20px rgba(4, 120, 87, 0.15)",
            marginBottom: "30px",
          }}
        >
          <span style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: "bold" }}>
            PORTAL UTAMA SIBTQ
          </span>
          <h1 style={{ margin: "15px 0 8px 0", fontSize: "28px", fontWeight: "bold" }}>
            Selamat Datang Kembali, {namaAdmin}! 👋
          </h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: "14px", lineHeight: "1.5" }}>
            Pantau ringkasan perkembangan data operasional pembimbingan Baca Tulis Al-Qur'an hari ini secara instan.
          </p>
        </div>

        {/* ================= SECTION 1: STATISTIK ANGKA (MULAI DARI O) ================= */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          
          <div style={statCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={statLabelStyle}>Total Peserta</span>
              <span style={{ fontSize: "24px" }}>👥</span>
            </div>
            <h2 style={statNumberStyle}>{stats.totalPeserta}</h2>
            <p style={{ ...statSubStyle, color: stats.totalPeserta > 0 ? "#16a34a" : "#64748b" }}>
              {stats.totalPeserta > 0 ? "📈 Peserta terdata" : "📭 Belum ada data"}
            </p>
          </div>

          <div style={statCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={statLabelStyle}>Menunggu Verifikasi</span>
              <span style={{ fontSize: "24px" }}>⏳</span>
            </div>
            <h2 style={statNumberStyle}>{stats.menungguVerifikasi}</h2>
            <p style={{ ...statSubStyle, color: stats.menungguVerifikasi > 0 ? "#ea580c" : "#16a34a" }}>
              {stats.menungguVerifikasi > 0 ? "⚠️ Perlu tindakan segera" : "✅ Berkas bersih"}
            </p>
          </div>

          <div style={statCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={statLabelStyle}>Total Pengajar</span>
              <span style={{ fontSize: "24px" }}>👨‍🏫</span>
            </div>
            <h2 style={statNumberStyle}>{stats.totalPengajar}</h2>
            <p style={{ ...statSubStyle, color: stats.totalPengajar > 0 ? "#2563eb" : "#64748b" }}>
              {stats.totalPengajar > 0 ? "✨ Pengajar aktif" : "📭 Belum ada data"}
            </p>
          </div>

          <div style={statCardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={statLabelStyle}>Kelas Berjalan</span>
              <span style={{ fontSize: "24px" }}>📅</span>
            </div>
            <h2 style={statNumberStyle}>{stats.kelasBerjalan}</h2>
            <p style={{ ...statSubStyle, color: stats.kelasBerjalan > 0 ? "#047857" : "#64748b" }}>
              {stats.kelasBerjalan > 0 ? "Slot waktu terisi" : "📭 Kelas belum dibuat"}
            </p>
          </div>

        </div>

        {/* ================= SECTION 2: GRAFIK & LOG AKTIVITAS TERKINI ================= */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "25px", alignItems: "start" }}>
          
          {/* Box Alur Grafik */}
          <div style={panelCardStyle}>
            <h3 style={panelTitleStyle}>📊 Grafik Kenaikan Pendaftaran (Tahun Ini)</h3>
            <p style={{ color: "#64748b", fontSize: "13px", marginTop: 0, marginBottom: "25px" }}>
              Visualisasi tren lonjakan data registrasi peserta SIBTQ dari bulan ke bulan.
            </p>
            
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: "180px", paddingBottom: "10px", borderBottom: "2px solid #e2e8f0" }}>
              {/* Batang grafik akan menyesuaikan tinggi berdasarkan total data yang ada nanti */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "35px", height: stats.totalPeserta > 0 ? `${Math.min(stats.totalPeserta * 10, 150)}px` : "5px", backgroundColor: "#34d399", borderRadius: "6px 6px 0 0", transition: "height 0.3s" }}></div>
                <span style={{ fontSize: "12px", color: "#64748b" }}>Aktif</span>
              </div>
            </div>
          </div>

          {/* Box Log Aktivitas Dinamis Input (Hanya muncul jika sudah ada inputan) */}
          <div style={panelCardStyle}>
            <h3 style={panelTitleStyle}>🔔 Aktivitas Input Terbaru</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "15px" }}>
              
              {aktivitasTerbaru.length === 0 ? (
                <div style={{ textAlign: "center", padding: "20px", color: "#94a3b8", fontSize: "13px" }}>
                  Belum ada aktivitas input data terdeteksi.
                </div>
              ) : (
                aktivitasTerbaru.map((item) => (
                  <div key={item.id} style={activityItemStyle}>
                    <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "bold" }}>{item.tanggal}</span>
                    <strong style={{ fontSize: "13px", color: "#064e3b", display: "block", marginTop: "2px" }}>{item.judul}</strong>
                    <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#475569", lineHeight: "1.4" }}>{item.deskripsi}</p>
                  </div>
                ))
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

/* ================= INTERNAL COMPONENT STYLES ================= */
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

const statCardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
};

const statLabelStyle = {
  fontSize: "13px",
  color: "#64748b",
  fontWeight: "500",
};

const statNumberStyle = {
  margin: "10px 0 5px 0",
  fontSize: "26px",
  color: "#0f172a",
  fontWeight: "bold",
};

const statSubStyle = {
  margin: 0,
  fontSize: "12px",
  fontWeight: "600",
};

const panelCardStyle = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "16px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
};

const panelTitleStyle = {
  margin: 0,
  fontSize: "16px",
  color: "#0f172a",
  fontWeight: "bold",
};

const activityItemStyle = {
  padding: "12px",
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  borderLeft: "4px solid #047857",
};

export default AdminDashboard;