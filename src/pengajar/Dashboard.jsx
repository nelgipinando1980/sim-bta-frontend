import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const nama = localStorage.getItem("nama") || "Pengajar";
  
  // State untuk menyimpan statistik
  const [stats, setStats] = useState({
    totalPeserta: 0,
    totalNilai: 0,
  });

  useEffect(() => {
    // Mengambil data dari localStorage (asumsi key yang digunakan adalah "data_peserta" dan "data_nilai")
    const peserta = JSON.parse(localStorage.getItem("data_peserta")) || [];
    const nilai = JSON.parse(localStorage.getItem("data_nilai")) || [];

    setStats({
      totalPeserta: peserta.length,
      totalNilai: nilai.length,
    });
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f0fdf4", fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <div style={{ 
          background: "linear-gradient(135deg, #065f46 0%, #10b981 100%)", 
          padding: "40px", 
          borderRadius: "24px", 
          marginBottom: "30px", 
          color: "#fff",
          boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)"
        }}>
          <h1 style={{ margin: "0 0 10px 0", fontSize: "32px" }}>Halo, {nama}! 👋</h1>
          <p style={{ opacity: 0.9, fontSize: "16px", maxWidth: "600px" }}>
            Selamat datang di ruang kerja Anda. Kelola penilaian dan pantau progres peserta bimbingan dengan mudah hari ini.
          </p>
        </div>

        {/* 4 Card Statistik - Terhubung dengan data state */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "30px" }}>
          {[
            { title: "Peserta Aktif", val: stats.totalPeserta, color: "#059669" },
            { title: "Nilai Terinput", val: stats.totalNilai, color: "#0891b2" },
            { title: "Sesi Hari Ini", val: "0", color: "#d97706" },
            { title: "Rata-rata Kelas", val: "0", color: "#7c3aed" }
          ].map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#fff", 
              padding: "20px", 
              borderRadius: "16px", 
              border: "1px solid #d1fae5",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
              <p style={{ color: "#64748b", margin: 0, fontSize: "13px", fontWeight: "500" }}>{item.title}</p>
              <h2 style={{ margin: 0, fontSize: "28px", color: item.color }}>{item.val}</h2>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ margin: "0 0 15px 0", color: "#064e3b" }}>📝 Aksi Cepat</h4>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={btnStyle}>Input Nilai Baru</button>
              <button style={{...btnStyle, backgroundColor: "#f1f5f9", color: "#475569"}}>Lihat Laporan</button>
            </div>
          </div>
          <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ margin: "0 0 15px 0", color: "#064e3b" }}>🔔 Pengumuman Terbaru</h4>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>Belum ada pengumuman untuk Anda.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  backgroundColor: "#059669",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600"
};

export default Dashboard;