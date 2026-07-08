import React, { useState } from "react";
import hero from "../assets/mahasiswa.jpeg";

function Hero() {
  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
        background: "linear-gradient(135deg, #042916 0%, #0b7a3e 100%)",
        color: "#ffffff",
        borderRadius: "32px",
        boxShadow: "0 20px 50px rgba(11, 122, 62, 0.15)",
        gap: "50px",
        maxWidth: "1240px",
        margin: "40px auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Kolon Kiri: Teks */}
      <div style={{ flex: 1, maxWidth: "600px" }}>
        <h1 
          style={{ 
            fontSize: "52px", 
            fontWeight: "800", 
            lineHeight: "1.15", 
            marginBottom: "20px",
            letterSpacing: "-1px"
          }}
        >
          Baca Tulis <span style={{ color: "#a7f3d0", background: "linear-gradient(to right, #ffffff, #a7f3d0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Al-Qur'an</span>
        </h1>

        <p 
          style={{ 
            fontSize: "18px", 
            lineHeight: "1.6", 
            color: "#d1fae5",
            marginBottom: "40px",
            fontWeight: "300"
          }}
        >
          Sistem Informasi BTA Universitas Nurul Huda. Integrasi pendaftaran, 
          pantau jadwal kuliah, penilaian berkala, hingga laporan studi dalam satu dasbor cerdas.
        </p>

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onMouseEnter={() => setHoverBtn1(true)}
            onMouseLeave={() => setHoverBtn1(false)}
            style={{
              padding: "14px 28px",
              background: hoverBtn1 ? "#ffffff" : "#10b981",
              color: "#042916",
              fontWeight: "600",
              fontSize: "16px",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hoverBtn1 ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            Mulai Pendaftaran
          </button>

          <button
            onMouseEnter={() => setHoverBtn2(true)}
            onMouseLeave={() => setHoverBtn2(false)}
            style={{
              padding: "14px 28px",
              background: hoverBtn2 ? "rgba(255,255,255,0.15)" : "transparent",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hoverBtn2 ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            Lihat Jadwal
          </button>
        </div>
      </div>

      {/* Kolom Kanan: Gambar */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <img
          src={hero}
          alt="Mahasiswa UNH"
          style={{ 
            width: "100%",
            maxWidth: "460px", 
            borderRadius: "24px 80px 24px 24px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
            border: "6px solid rgba(255, 255, 255, 0.08)",
            objectFit: "cover",
            animation: "float 6s ease-in-out infinite" // Opsional jika CSS global mendukung animasi
          }}
        />
      </div>
    </section>
  );
}

export default Hero;