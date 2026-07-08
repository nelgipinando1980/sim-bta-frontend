import React, { useState } from 'react';

function Informasi() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  // Data Pengumuman/Informasi Kampus (Bisa ditambah sesuai kebutuhan)
  const infoList = [
    {
      id: 1,
      tag: "Akademik",
      tagColor: "#0b7a3e",
      tagBg: "rgba(11, 122, 62, 0.08)",
      date: "09 Juli 2026",
      title: "Pendaftaran Program BTA Semester Ganjil 2026/2027 Telah Dibuka",
      desc: "Diberitahukan kepada seluruh mahasiswa Universitas Nurul Huda bahwa pendaftaran program sertifikasi BTA gelombang pertama resmi dibuka hingga akhir bulan ini."
    },
    {
      id: 2,
      tag: "Ujian",
      tagColor: "#b91c1c",
      tagBg: "rgba(185, 28, 28, 0.08)",
      date: "05 Juli 2026",
      title: "Jadwal Pelaksanaan Ujian Munaqosyah BTA Gelombang II",
      desc: "Pelaksanaan ujian praktik membaca dan menulis Al-Qur'an (Munaqosyah) akan dilaksanakan secara tatap muka di laboratorium keagamaan kampus utama."
    },
    {
      id: 3,
      tag: "Pengumuman",
      tagColor: "#b45309",
      tagBg: "rgba(180, 83, 9, 0.08)",
      date: "28 Juni 2026",
      title: "Panduan Teknis Penggunaan Aplikasi Baru SIM BTA",
      desc: "Kini mahasiswa dapat melihat grafik kelulusan, jadwal bimbingan, dan mengunduh sertifikat digital langsung melalui akun dashboard SIM BTA masing-masing."
    }
  ];

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        boxSizing: "border-box"
      }}
    >
      {/* Judul Bagian Atas */}
      <div style={{ marginBottom: "30px", borderBottom: "2px solid #e2ece7", paddingBottom: "16px" }}>
        <h2 style={{ color: "#042916", fontSize: "24px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>
          Pusat Informasi & Pengumuman
        </h2>
        <p style={{ color: "#52635c", margin: "4px 0 0 0", fontSize: "14px", fontWeight: "400" }}>
          Simak informasi terbaru, agenda akademik, dan berita penting seputar program BTA Universitas Nurul Huda.
        </p>
      </div>

      {/* Grid List Pengumuman */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%"
        }}
      >
        {infoList.map((item, idx) => {
          const isCardHovered = hoveredCard === item.id;
          
          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px 30px",
                border: isCardHovered ? "1px solid rgba(11, 122, 62, 0.3)" : "1px solid #e2ece7",
                boxShadow: isCardHovered 
                  ? "0 15px 30px rgba(11, 122, 62, 0.05)" 
                  : "0 4px 12px rgba(0, 0, 0, 0.01)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isCardHovered ? "translateY(-2px)" : "translateY(0)",
                position: "relative",
                cursor: "pointer"
              }}
            >
              {/* Meta Data: Tag Kategori & Tanggal */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{
                  background: item.tagBg,
                  color: item.tagColor,
                  fontSize: "11px",
                  fontWeight: "700",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {item.tag}
                </span>
                <span style={{ color: "#94a3b8", fontSize: "12.5px", fontWeight: "500" }}>
                  📅 {item.date}
                </span>
              </div>

              {/* Konten Utama */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "280px" }}>
                  <h3 style={{ 
                    color: isCardHovered ? "#0b7a3e" : "#042916", 
                    fontSize: "17px", 
                    fontWeight: "700", 
                    margin: "0 0 8px 0",
                    lineHeight: "1.4",
                    transition: "color 0.2s ease"
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#4a5952", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Tombol Aksi Kanan */}
                <button
                  onMouseEnter={() => setHoveredBtn(item.id)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    padding: "10px 20px",
                    background: hoveredBtn === item.id ? "#042916" : "transparent",
                    color: hoveredBtn === item.id ? "#ffffff" : "#0b7a3e",
                    border: hoveredBtn === item.id ? "1px solid #042916" : "1px solid #0b7a3e",
                    borderRadius: "100px",
                    fontSize: "12.5px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "flex-end"
                  }}
                >
                  <span>Baca Detail</span>
                  <span style={{ transform: hoveredBtn === item.id ? "translateX(2px)" : "none", transition: "transform 0.2s" }}>➔</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Informasi;