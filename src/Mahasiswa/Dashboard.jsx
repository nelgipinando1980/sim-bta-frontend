import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashboardMahasiswa() {
  const navigate = useNavigate();
  const [namaMahasiswa, setNamaMahasiswa] = useState("Mahasiswa");
  const [nimMahasiswa, setNimMahasiswa] = useState("");
  const [statusVerifikasi, setStatusVerifikasi] = useState("Belum Mendaftar");
  
  // State untuk menampung pengumuman & jadwal
  const [pengumuman, setPengumuman] = useState([]);
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    // 1. Ambil data login mahasiswa yang aktif
    const nama = localStorage.getItem("nama");
    const nim = localStorage.getItem("nim") || localStorage.getItem("username");
    
    if (nama) setNamaMahasiswa(nama);
    if (nim) setNimMahasiswa(nim);

    // 2. Ambil pengumuman dari Admin
    const dataPengumumanLokal = localStorage.getItem("data_pengumuman");
    if (dataPengumumanLokal) {
      setPengumuman(JSON.parse(dataPengumumanLokal));
    }

    // 3. Ambil jadwal dari Admin
    const dataJadwalLokal = localStorage.getItem("data_jadwal");
    if (dataJadwalLokal) {
      setJadwal(JSON.parse(dataJadwalLokal));
    }

    // 4. Ambil status verifikasi berdasarkan NIM mahasiswa
    const dataPesertaLokal = localStorage.getItem("data_peserta");
    if (dataPesertaLokal && nim) {
      const semuaPeserta = JSON.parse(dataPesertaLokal);
      const dataSaya = semuaPeserta.find((p) => p.nim === nim);
      if (dataSaya) {
        setStatusVerifikasi(dataSaya.status_verifikasi || "Menunggu");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getBadgeStyle = (status) => {
    switch (status) {
      case "Diterima":
        return { color: "#0f5132", background: "#d1e7dd" };
      case "Ditolak":
        return { color: "#842029", background: "#f8d7da" };
      case "Menunggu":
        return { color: "#664d03", background: "#fff3cd" };
      default:
        return { color: "#475569", background: "#f1f5f9" };
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", fontFamily: "sans-serif" }}>
      
      {/* ================= NAVBAR ATAS ================= */}
      <nav
        style={{
          backgroundColor: "#064e3b",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <h2 style={{ color: "#fff", margin: 0, fontSize: "20px" }}>SIM BTA</h2>
          <span style={{ color: "#34d399", fontSize: "11px" }}>Universitas Nurul Huda</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ color: "#fff", fontSize: "14px", fontWeight: "500" }}>
            👤 {namaMahasiswa} ({nimMahasiswa})
          </span>
          <button onClick={handleLogout} style={logoutBtnStyle}>
            🚪 Keluar
          </button>
        </div>
      </nav>

      {/* ================= KONTEN UTAMA ================= */}
      <div style={{ maxWidth: "1200px", margin: "30px auto", padding: "0 20px" }}>
        
        {/* Welcome Banner */}
        <div style={{ marginBottom: "25px" }}>
          <h1 style={{ color: "#064e3b", margin: "0 0 5px 0", fontSize: "26px", fontWeight: "bold" }}>
            Selamat Datang, {namaMahasiswa}! 👋
          </h1>
          <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>
            Gunakan panel ini untuk melakukan pendaftaran, melihat jadwal, serta memantau status kelulusan berkas Anda.
          </p>
        </div>

        {/* ================= GRID MENU UTAMA (USE CASES) ================= */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          
          {/* Use Case 1: Form Pendaftaran BTA */}
          <div style={cardMenu}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>📝</div>
            <h3 style={{ margin: "0 0 8px 0", color: "#064e3b" }}>Formulir Pendaftaran</h3>
            <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 15px 0", flexGrow: 1 }}>
              Belum mendaftar? Daftarkan diri Anda segera untuk mengikuti program bimbingan Baca Tulis Al-Qur'an (BTA).
            </p>
            <button 
              onClick={() => navigate("/register")} // Diarahkan ke form pendaftaran/register yang kamu sediakan
              style={btnAksi}
              disabled={statusVerifikasi !== "Belum Mendaftar"}
            >
              {statusVerifikasi === "Belum Mendaftar" ? "Daftar Sekarang" : "Sudah Terdaftar"}
            </button>
          </div>

          {/* Use Case 2: Cek Jadwal Belajar */}
          <div style={cardMenu}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>📅</div>
            <h3 style={{ margin: "0 0 8px 0", color: "#064e3b" }}>Jadwal BTA Saya</h3>
            <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 15px 0", flexGrow: 1 }}>
              Lihat jadwal kelas bimbingan, ruang kelas, serta nama dosen/pengajar BTA Anda di sini jika sudah diterima.
            </p>
            <button 
              onClick={() => {
                if (statusVerifikasi === "Diterima") {
                  alert("Menampilkan jadwal belajar Anda!");
                } else {
                  alert("Jadwal belum tersedia. Berkas pendaftaran Anda harus disetujui (Diterima) oleh Admin terlebih dahulu.");
                }
              }} 
              style={{ ...btnAksi, backgroundColor: statusVerifikasi === "Diterima" ? "#047857" : "#cbd5e1", cursor: statusVerifikasi === "Diterima" ? "pointer" : "not-allowed" }}
              disabled={statusVerifikasi !== "Diterima"}
            >
              Lihat Jadwal
            </button>
          </div>

          {/* Use Case 3: Pusat Bantuan (WhatsApp) */}
          <div style={cardMenu}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>📞</div>
            <h3 style={{ margin: "0 0 8px 0", color: "#064e3b" }}>Pusat Layanan Bantuan</h3>
            <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 15px 0", flexGrow: 1 }}>
              Memiliki kendala saat registrasi pendaftaran atau masalah teknis dengan akun SIM BTA Anda? Hubungi kami.
            </p>
            <button onClick={() => navigate("/bantuan")} style={{ ...btnAksi, backgroundColor: "#25D366" }}>
              Hubungi Admin BTA
            </button>
          </div>

        </div>

        {/* ================= DETAIL STATUS & PENGUMUMAN ================= */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "25px" }}>
          
          {/* Kolom Kiri: Status Kelulusan Berkas */}
          <div style={cardStyle}>
            <h3 style={{ color: "#064e3b", marginTop: 0, marginBottom: "20px", borderBottom: "2px solid #f1f5f9", paddingBottom: "10px" }}>
              📌 Status Kelulusan Berkas
            </h3>
            
            <div style={{ textAlign: "center", padding: "15px 0" }}>
              <p style={{ margin: "0 0 10px 0", color: "#64748b", fontSize: "14px" }}>Status Verifikasi:</p>
              <span
                style={{
                  padding: "10px 25px",
                  borderRadius: "30px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  display: "inline-block",
                  ...getBadgeStyle(statusVerifikasi)
                }}
              >
                {statusVerifikasi}
              </span>
            </div>

            <div style={{ marginTop: "15px", fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
              {statusVerifikasi === "Diterima" && (
                <p style={{ color: "#0f5132", backgroundColor: "#e8f5e9", padding: "12px", borderRadius: "10px", margin: 0, border: "1px solid #c3e6cb" }}>
                  🎉 <strong>Selamat!</strong> Berkas Anda telah diverifikasi dan dinyatakan lulus pendaftaran BTA. Silakan cek menu Jadwal secara berkala.
                </p>
              )}
              {statusVerifikasi === "Ditolak" && (
                <p style={{ color: "#842029", backgroundColor: "#ffebee", padding: "12px", borderRadius: "10px", margin: 0, border: "1px solid #f5c6cb" }}>
                  ❌ <strong>Berkas Ditolak.</strong> Berkas Anda tidak memenuhi kualifikasi pendaftaran BTA. Hubungi Admin di tombol Layanan Bantuan untuk perbaikan berkas.
                </p>
              )}
              {statusVerifikasi === "Menunggu" && (
                <p style={{ color: "#664d03", backgroundColor: "#fffde7", padding: "12px", borderRadius: "10px", margin: 0, border: "1px solid #ffeeba" }}>
                  ⏳ <strong>Sedang Diproses.</strong> Pendaftaran Anda telah kami terima dan sedang antre dalam proses verifikasi oleh Admin. Silakan cek status Anda berkala.
                </p>
              )}
              {statusVerifikasi === "Belum Mendaftar" && (
                <p style={{ color: "#475569", backgroundColor: "#f8fafc", padding: "12px", borderRadius: "10px", margin: 0, border: "1px solid #e2e8f0" }}>
                  Anda belum terdaftar. Silakan klik tombol <strong>Daftar Sekarang</strong> di atas untuk mengikuti kegiatan BTA Universitas Nurul Huda.
                </p>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Pengumuman Terkini */}
          <div style={cardStyle}>
            <h3 style={{ color: "#064e3b", marginTop: 0, marginBottom: "20px", borderBottom: "2px solid #f1f5f9", paddingBottom: "10px" }}>
              📢 Pengumuman Akademik Terbaru
            </h3>

            {pengumuman.length === 0 ? (
              <div style={{ textAlign: "center", color: "#94a3b8", padding: "40px 0" }}>
                <span style={{ fontSize: "40px" }}>📭</span>
                <p style={{ margin: "10px 0 0 0", fontSize: "14px" }}>Belum ada pengumuman pendaftaran BTA saat ini.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {pengumuman.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "15px",
                      backgroundColor: "#f8fafc"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                      <h4 style={{ margin: 0, color: "#0f172a", fontSize: "15px", fontWeight: "bold" }}>
                        {item.judul}
                      </h4>
                      <span style={{ fontSize: "11px", color: "#64748b" }}>
                        📅 {item.tanggal}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "13px", color: "#334155", lineHeight: "1.6" }}>
                      {item.isi}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

/* ================= COMPONENT STYLES ================= */
const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "16px",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
  border: "1px solid #e2e8f0",
};

const cardMenu = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
  border: "1px solid #e2e8f0",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
};

const btnAksi = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#064e3b",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  fontSize: "13px",
  cursor: "pointer",
  transition: "all 0.2s"
};

const logoutBtnStyle = {
  padding: "8px 15px",
  backgroundColor: "rgba(239, 68, 68, 0.1)",
  color: "#f87171",
  border: "1px solid rgba(239, 68, 68, 0.2)",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "13px",
  transition: "all 0.2s",
};

export default DashboardMahasiswa;