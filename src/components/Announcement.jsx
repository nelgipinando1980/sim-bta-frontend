import React, { useState } from "react";

function Announcement() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(false);

  const dataAnnouncement = [
    {
      date: "01",
      month: "Mei",
      title: "Pendaftaran BTA Gelombang II ",
      desc: "Bagian administrasi resmi membuka pendaftaran gelombang kedua untuk mahasiswa angkatan 2023.",
      bg: "#ffffff", // Diubah jadi putih bersih agar kontras dengan background utama yang sudah berwarna
      color: "#0b7a3e"
    },
    {
      date: "25",
      month: "Apr",
      title: "Ujian Kenaikan Tingkatan",
      desc: "Jadwal ujian tahsin dan tajwid berkala kini sudah dapat diakses oleh seluruh peserta.",
      bg: "#ffffff",
      color: "#0b7a3e"
    },
    {
      date: "20",
      month: "Apr",
      title: "Jadwal Semester Genap",
      desc: "Pembagian kelompok belajar intensif Al-Qur'an terbaru dapat dilihat melalui halaman utama.",
      bg: "#fff5e0",
      color: "#b45309"
    }
  ];

  return (
    <div
      style={{
        flex: 2, 
        background: "#e8f0ec", // 🟢 WARNA BARU: Sage Green Pastel yang lembut dan estetik (bukan putih!)
        borderRadius: "32px",
        padding: "40px 35px",
        boxShadow: "0 12px 30px rgba(4, 41, 22, 0.04)", 
        border: "1px solid #d3e2db", // Border diselaraskan dengan warna dasar sage
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
          }}
        >
          <h2 style={{ color: "#042916", fontSize: "22px", fontWeight: "700", margin: 0, letterSpacing: "-0.5px" }}>
            Pengumuman Terbaru
          </h2>

          <a
            href="#all"
            onMouseEnter={() => setHoveredLink(true)}
            onMouseLeave={() => setHoveredLink(false)}
            style={{
              color: "#0B7A3E",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              borderBottom: hoveredLink ? "1px solid #0B7A3E" : "1px solid transparent",
              paddingBottom: "2px"
            }}
          >
            Lihat Semua
          </a>
        </div>

        {/* List Item */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {dataAnnouncement.map((announcement, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  ...itemStyle,
                  /* Efek Hover: Saat disentuh, item akan pop-up menjadi warna hijau yang sedikit lebih cerah */
                  background: isHovered ? "#dbede4" : "transparent",
                  transform: isHovered ? "translateX(6px)" : "translateX(0)",
                  borderLeft: isHovered ? "4px solid #0B7A3E" : "4px solid transparent",
                }}
              >
                {/* Kotak Tanggal */}
                <div style={{ ...dateBoxStyle, background: announcement.bg, color: announcement.color, boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                  <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800", lineHeight: "1.1" }}>
                    {announcement.date}
                  </h3>
                  <small style={{ fontSize: "11px", fontWeight: "600", opacity: 0.8, textTransform: "uppercase", marginTop: "2px" }}>
                    {announcement.month}
                  </small>
                </div>

                {/* Konten Teks */}
                <div>
                  <h4 style={{ 
                    margin: "0 0 4px 0", 
                    color: isHovered ? "#0B7A3E" : "#042916", 
                    fontSize: "16px", 
                    fontWeight: "600",
                    transition: "color 0.2s ease"
                  }}>
                    {announcement.title}
                  </h4>
                  <p style={textStyle}>
                    {announcement.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const itemStyle = {
  display: "flex",
  gap: "20px",
  padding: "14px 12px",
  borderRadius: "16px",
  alignItems: "center",
  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  cursor: "pointer",
};

const dateBoxStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  transition: "all 0.3s ease",
};

const textStyle = {
  color: "#2f3e46", // Dibikin lebih gelap sedikit dari aslinya agar kontras teksnya tajam di atas warna sage
  margin: 0,
  fontSize: "14px",
  lineHeight: "1.5",
  fontWeight: "400"
};

export default Announcement;