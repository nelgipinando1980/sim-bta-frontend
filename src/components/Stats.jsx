import React, { useState } from "react";

function Stats() {
  const data = [
    { title: "Total Peserta", value: "128", desc: "Mahasiswa Terdaftar", icon: "👥" },
    { title: "Peserta Lulus", value: "85", desc: "66.4% Menyelesaikan BTA", icon: "🏆" },
    { title: "Belum Lulus", value: "43", desc: "Peserta Aktif / Remedial", icon: "📄" },
    { title: "Pengajar MQ", value: "12", desc: "Ustadz & Ustadzah", icon: "🎓" },
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
              padding: "30px",
              borderRadius: "24px",
              boxShadow: isHovered
                ? "0 20px 40px rgba(11, 122, 62, 0.08), 0 1px 3px rgba(0,0,0,0.01)"
                : "0 10px 30px rgba(0, 0, 0, 0.02)",
              border: isHovered ? "1px solid rgba(11, 122, 62, 0.2)" : "1px solid #f1f5f9",
              transform: isHovered ? "translateY(-8px)" : "translateY(0)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "150px",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#64748b", fontSize: "13px", fontWeight: "600", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                {item.title}
              </span>
              <div style={{
                width: "38px", height: "38px", background: isHovered ? "#0B7A3E" : "#f0fdf4",
                borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", transition: "all 0.3s ease"
              }}>
                <span style={{ filter: isHovered ? "brightness(2)" : "none" }}>{item.icon}</span>
              </div>
            </div>

            <div>
              <h2 style={{ color: "#042916", fontSize: "40px", fontWeight: "800", margin: "0 0 4px 0", letterSpacing: "-1px" }}>
                {item.value}
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0, fontWeight: "500", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", backgroundColor: isHovered ? "#10b981" : "#cbd5e1", borderRadius: "50%", transition: "all 0.3s ease" }} />
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