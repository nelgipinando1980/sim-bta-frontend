import React, { useState } from "react";

function Stats() {
  const data = [
    { title: "Pendaftaran", value: "Mudah", desc: "100% Online & Cepat", icon: "⚡" },
    { title: "Metode Belajar", value: "Seru", desc: "Menyenangkan & Anti Stres", icon: "😊" },
    { title: "Tim Pengajar", value: "Sabar", desc: "Ustadz & Ustadzah Kompeten", icon: "🤝" },
    { title: "Waktu Kuliah", value: "Fleksibel", desc: "Bisa Pilih Kelas Sendiri", icon: "📅" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "25px",
        padding: "30px 40px",
        maxWidth: "1240px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {data.map((item, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              background: "#ffffff",
              padding: "24px", // Sedikit dikurangi agar ruang udara di dalam card lebih lega
              borderRadius: "20px",
              boxShadow: isHovered
                ? "0 20px 40px rgba(11, 122, 62, 0.08)"
                : "0 10px 30px rgba(0, 0, 0, 0.02)",
              border: isHovered ? "1px solid rgba(11, 122, 62, 0.2)" : "1px solid #f1f5f9",
              transform: isHovered ? "translateY(-6px)" : "translateY(0)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "130px", // Disesuaikan tingginya agar lebih compact
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "11px", fontWeight: "600", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                {item.title}
              </span>
              <div style={{
                width: "34px", height: "34px", background: isHovered ? "#0B7A3E" : "#f0fdf4",
                borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", transition: "all 0.3s ease"
              }}>
                <span style={{ filter: isHovered ? "brightness(2)" : "none" }}>{item.icon}</span>
              </div>
            </div>

            <div>
              {/* Ukuran tulisan utama diperkecil ke 26px agar proporsional */}
              <h2 style={{ color: "#042916", fontSize: "26px", fontWeight: "700", margin: "0 0 2px 0", letterSpacing: "-0.5px" }}>
                {item.value}
              </h2>
              <p style={{ color: "#64748b", fontSize: "12px", margin: 0, fontWeight: "500", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "5px", height: "5px", backgroundColor: isHovered ? "#10b981" : "#cbd5e1", borderRadius: "50%", transition: "all 0.3s ease" }} />
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Stats;