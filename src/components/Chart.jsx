import React, { useState } from 'react';

function Chart() {
  const [activeBar, setActiveBar] = useState(null);

  const chartData = [
    { month: "Jan", height: "40%", value: "40%" },
    { month: "Feb", height: "55%", value: "55%" },
    { month: "Mar", height: "45%", value: "45%" },
    { month: "Apr", height: "70%", value: "70%" },
    { month: "Mei", height: "85%", value: "85%" },
    { month: "Jun", height: "100%", value: "100%" },
  ];

  return (
    <div
      style={{
        flex: 1,
        background: "linear-gradient(145deg, #f5f8f6 0%, #ebf1ee 100%)", // Soft Eucalyptus Tint
        borderRadius: "32px",
        padding: "40px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.01)",
        border: "1px solid #e2ece7",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>
        {/* Bagian Judul */}
        <div style={{ marginBottom: "35px" }}>
          <h2 style={{ color: "#042916", fontSize: "21px", fontWeight: "700", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
            Grafik Kelulusan
          </h2>
          <p style={{ color: "#475569", margin: 0, fontSize: "13.5px", fontWeight: "400" }}>
            Peningkatan tingkat kelulusan program BTA selama 6 bulan terakhir.
          </p>
        </div>

        {/* Kontainer Grafik */}
        <div style={{ display: "flex", gap: "20px", height: "230px", alignItems: "stretch", position: "relative" }}>
          
          {/* Sumbu Y */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", color: "#64748b", fontSize: "11.5px", fontWeight: "600", paddingBottom: "35px", textAlign: "right", width: "35px" }}>
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
          </div>

          {/* Canvas Batang */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
            
            {/* Garis Grid Latar Belakang */}
            <div style={{ position: "absolute", width: "100%", height: "calc(100% - 35px)", top: 0, left: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none" }}>
              <div style={{ borderTop: "1px dashed rgba(11, 122, 62, 0.08)", width: "100%" }}></div>
              <div style={{ borderTop: "1px dashed rgba(11, 122, 62, 0.08)", width: "100%" }}></div>
              <div style={{ borderBottom: "2px solid #e2ece7", width: "100%" }}></div>
            </div>

            {/* Render Batang */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "calc(100% - 35px)", padding: "0 10px", zIndex: 2 }}>
              {chartData.map((item, idx) => {
                const isBarHovered = activeBar === idx;
                
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveBar(idx)}
                    onMouseLeave={() => setActiveBar(null)}
                    style={{
                      width: "34px",
                      height: item.height,
                      background: isBarHovered 
                        ? "linear-gradient(to top, #0b7a3e, #10b981)" 
                        : "linear-gradient(to top, #042916, #0b7a3e)",
                      borderRadius: "10px 10px 0 0",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "pointer",
                      position: "relative",
                      boxShadow: isBarHovered ? "0 8px 16px rgba(11, 122, 62, 0.15)" : "none",
                    }}
                  >
                    {/* Tooltip */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#042916",
                        color: "#ffffff",
                        padding: "6px 10px",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: "700",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        opacity: isBarHovered ? 1 : 0,
                        visibility: isBarHovered ? "visible" : "hidden",
                        transition: "all 0.2s ease",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Label Sumbu X */}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10px", height: "20px", alignItems: "center" }}>
              {chartData.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    width: "34px",
                    textAlign: "center",
                    fontSize: "12.5px",
                    fontWeight: "600",
                    color: activeBar === idx ? "#0b7a3e" : "#94a3b8",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.month}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;