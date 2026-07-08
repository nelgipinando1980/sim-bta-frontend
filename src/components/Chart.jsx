import React, { useState } from 'react';
import logoUnuha from "../assets/cropped-LOGO-UNUHA.png";

function AboutUniversity() {
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
      style={{
        flex: 1,
        // EFEK GLASSMORPHISM PREMIUM: Latar transparan dengan blur tingkat tinggi
        background: hoveredCard
          ? "rgba(255, 255, 255, 0.25)"
          : "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "32px",
        padding: "40px 35px",
        // GARIS TEPI (STROKE) GLASSMORPHISM TRANSPARAN TRICK
        border: hoveredCard 
          ? "1px solid rgba(255, 255, 255, 0.4)" 
          : "1px solid rgba(255, 255, 255, 0.2)",
        // BAYANGAN HALUS YANG MENGIKUTI TEMA HIJAU KAMPUS
        boxShadow: hoveredCard 
          ? "0 30px 60px rgba(4, 41, 22, 0.12), inset 0 1px 0 rgba(255,255,255,0.4)" 
          : "0 15px 35px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.2)",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        textAlign: "left",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        minHeight: "440px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* GLOW EFFECT: Gradasi cahaya hijau tersembunyi di pojok latar belakang */}
      <div style={{
        position: "absolute",
        top: "-80px",
        right: "-80px",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(11, 122, 62, 0.15) 0%, rgba(255,255,255,0) 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: hoveredCard ? "scale(1.2)" : "scale(1)",
        transition: "transform 0.6s ease"
      }} />

      <div style={{ width: "100%", zIndex: 2 }}>
        {/* Header Logo & Judul */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "26px" }}>
          <div 
            style={{ 
              width: "64px", 
              height: "64px", 
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(4, 41, 22, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              flexShrink: 0,
              transform: hoveredCard ? "translateY(-4px) rotate(-3deg)" : "none",
              transition: "all 0.5s ease"
            }}
          >
            <img 
              src={logoUnuha} 
              alt="Logo Universitas Nurul Huda" 
              style={{ width: "46px", height: "46px", objectFit: "contain" }} 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span style="font-size:24px">🏫</span>';
              }}
            />
          </div>
          <div>
            <span style={{ color: "#0b7a3e", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Profil Utama
            </span>
            <h3 style={{ color: "#042916", fontSize: "22px", fontWeight: "800", margin: "2px 0 0 0", letterSpacing: "-0.5px" }}>
              Universitas Nurul Huda
            </h3>
          </div>
        </div>

        {/* Teks Paragraf Narasi */}
        <div style={{ color: "#3e4d46", fontSize: "13.5px", lineHeight: "1.65", fontWeight: "400" }}>
          <p style={{ margin: "0 0 14px 0" }}>
            <strong>Universitas Nurul Huda (UNUHA)</strong> hadir sebagai pilar perguruan tinggi modern yang secara harmonis mengintegrasikan inovasi sains-teknologi mutakhir dengan keluhuran peradaban religius. 
          </p>
          <p style={{ margin: "0 0 24px 0" }}>
            Berdiri kokoh di atas komitmen inklusivitas, kami mendedikasikan lingkungan akademik hijau ini untuk membina generasi unggul, memacu riset berdampak, serta mencetak talenta masa depan yang berjiwa pemimpin dan adaptif di era digital global.
          </p>
        </div>

        {/* Statistik/Fakta Kampus dengan Desain Minimalis Transparan */}
        <div style={{ 
          display: "flex", 
          gap: "30px", 
          padding: "16px 0", 
          borderTop: "1px solid rgba(11, 122, 62, 0.08)",
          borderBottom: "1px solid rgba(11, 122, 62, 0.08)",
          marginBottom: "28px"
        }}>
          <div>
            <div style={{ color: "#0b7a3e", fontSize: "16px", fontWeight: "700", letterSpacing: "0.5px" }}>Terakreditasi</div>
            <div style={{ color: "#52635c", fontSize: "11px", fontWeight: "500", marginTop: "2px" }}>Resmi BAN-PT</div>
          </div>
          <div style={{ width: "1px", background: "rgba(11, 122, 62, 0.08)" }}></div>
          <div>
            <div style={{ color: "#0b7a3e", fontSize: "16px", fontWeight: "700", letterSpacing: "0.5px" }}>Fokus Masa Depan</div>
            <div style={{ color: "#52635c", fontSize: "11px", fontWeight: "500", marginTop: "2px" }}>Kurikulum Berbasis IT</div>
          </div>
        </div>
      </div>

      {/* Tombol Tautan Dengan Gaya Bold Solid */}
      <a
        href="https://unuha.ac.id" 
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHoveredBtn(true)}
        onMouseLeave={() => setHoveredBtn(false)}
        style={{
          padding: "12px 28px",
          background: hoveredBtn ? "#042916" : "#0b7a3e",
          color: "#ffffff",
          fontWeight: "600",
          fontSize: "13.5px",
          textDecoration: "none",
          borderRadius: "100px",
          boxShadow: hoveredBtn ? "0 15px 30px rgba(4, 41, 22, 0.2)" : "0 6px 16px rgba(11, 122, 62, 0.15)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          transform: hoveredBtn ? "translateY(-3px)" : "translateY(0)",
          zIndex: 2
        }}
      >
        <span>Kunjungi Portal Resmi</span>
        <span style={{ 
          transform: hoveredBtn ? "translateX(4px)" : "none", 
          transition: "transform 0.3s ease" 
        }}>➔</span>
      </a>
    </div>
  );
}

export default AboutUniversity;