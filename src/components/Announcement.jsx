import React, { useState } from "react";

function Announcement() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(false);

  const dataAnnouncement = [
    {
      date: "01",
      month: "Mei",
      title: "Pendaftaran BTA Gelombang II",
      desc: "Bagian administrasi resmi membuka pendaftaran gelombang kedua untuk mahasiswa angkatan 2023.",
    },
    {
      date: "25",
      month: "Apr",
      title: "Ujian Kenaikan Tingkatan",
      desc: "Jadwal ujian tahsin dan tajwid berkala kini sudah dapat diakses oleh seluruh peserta.",
    },
    {
      date: "20",
      month: "Apr",
      title: "Jadwal Semester Genap",
      desc: "Pembagian kelompok belajar intensif Al-Qur'an terbaru dapat dilihat melalui halaman utama.",
    },
  ];

  return (
    <div
      style={{
        flex: 2,
        background: "#e8f0ec", // Sage Green Pastel tetap dipertahankan sebagai wadah utama
        borderRadius: "28px",
        padding: "35px 30px",
        boxShadow: "0 10px 30px rgba(4, 41, 22, 0.03)",
        border: "1px solid #d3e2db",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Header Bagian Atas */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
            padding: "0 4px",
          }}
        >
          <h2 style={{ color: "#042916", fontSize: "20px", fontWeight: "700", margin: 0, letterSpacing: "-0.5px" }}>
            Pengumuman Terbaru
          </h2>

          <a
            href="#all"
            onMouseEnter={() => setHoveredLink(true)}
            onMouseLeave={() => setHoveredLink(false)}
            style={{
              color: "#0b7a3e",
              fontWeight: "600",
              fontSize: "13px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              opacity: hoveredLink ? 1 : 0.85,
              transform: hoveredLink ? "translateY(-1px)" : "translateY(0)",
            }}
          >
            Lihat Semua {hoveredLink ? "→" : ""}
          </a>
        </div>

        {/* List Card Item */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {dataAnnouncement.map((announcement, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "16px",
                  borderRadius: "20px",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  // Mengubah background menjadi putih bersih saat di-hover agar pop-out kontras
                  background: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                  boxShadow: isHovered ? "0 12px 24px rgba(4, 41, 22, 0.06)" : "0 2px 4px rgba(0,0,0,0.01)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  border: isHovered ? "1px solid rgba(11, 122, 62, 0.1)" : "1px solid transparent",
                }}
              >
                {/* Kotak Tanggal - Dibuat minimalis dan seragam */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    background: isHovered ? "#0b7a3e" : "#ffffff",
                    color: isHovered ? "#ffffff" : "#042916",
                    border: "1px solid rgba(11, 122, 62, 0.05)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800", lineHeight: "1.1" }}>
                    {announcement.date}
                  </h3>
                  <small style={{ fontSize: "10px", fontWeight: "600", opacity: 0.8, textTransform: "uppercase", marginTop: "1px", letterSpacing: "0.5px" }}>
                    {announcement.month}
                  </small>
                </div>

                {/* Konten Teks */}
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      margin: "0 0 4px 0",
                      color: "#042916",
                      fontSize: "15px",
                      fontWeight: "600",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {announcement.title}
                  </h4>
                  <p
                    style={{
                      color: "#52635c", // Warna teks dibuat abu-abu sage gelap agar kontrasnya nyaman di mata
                      margin: 0,
                      fontSize: "13px",
                      lineHeight: "1.45",
                      fontWeight: "400",
                    }}
                  >
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

export default Announcement;