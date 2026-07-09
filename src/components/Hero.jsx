import React, { useState, useEffect } from "react";
// Import useNavigate dari react-router-dom untuk sistem perpindahan halaman
import { useNavigate } from "react-router-dom";

// Pastikan gambar hero1 dan hero2 sudah ada di folder assets kamu
import hero1 from "../assets/mahasiswa.jpeg"; 
import hero2 from "../assets/KAMPUS A.jpg";

function Hero() {
  // Inisialisasi fungsi navigate
  const navigate = useNavigate();

  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);
  const [hoverArrowLeft, setHoverArrowLeft] = useState(false);
  const [hoverArrowRight, setHoverArrowRight] = useState(false);
  
  const images = [hero1, hero2]; 
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efek untuk Auto-Slide setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
        background: "linear-gradient(135deg, #021f10 0%, #053e1f 50%, #0b7a3e 100%)",
        color: "#ffffff",
        borderRadius: "32px",
        boxShadow: "0 25px 60px rgba(4, 41, 22, 0.25)",
        gap: "50px",
        maxWidth: "1240px",
        margin: "40px auto",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* ELEMEN DEKORASI */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", filter: "blur(60px)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(167, 243, 208, 0.1)", filter: "blur(60px)", zIndex: 1 }} />

      {/* Kolom Kiri: Teks */}
      <div style={{ flex: 1, maxWidth: "600px", zIndex: 2 }}>
        <h1 
          style={{ 
            fontSize: "52px", 
            fontWeight: "800", 
            lineHeight: "1.15", 
            marginBottom: "20px",
            letterSpacing: "-1px"
          }}
        >
          Baca Tulis <span style={{ background: "linear-gradient(135deg, #34d399 0%, #a7f3d0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "900" }}>Al-Qur'an</span>
        </h1>

        <p 
          style={{ 
            fontSize: "17px", 
            lineHeight: "1.65", 
            color: "#cbd5e1", 
            marginBottom: "40px",
            fontWeight: "400"
          }}
        >
          Sistem Informasi BTA Universitas Nurul Huda. Integrasi pendaftaran, 
          pantau jadwal kuliah, penilaian berkala, hingga laporan studi dalam satu dasbor cerdas.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {/* Tombol 1: Mulai Pendaftaran */}
          <button
            onClick={() => navigate("/register")}
            onMouseEnter={() => setHoverBtn1(true)}
            onMouseLeave={() => setHoverBtn1(false)}
            style={{
              padding: "14px 32px",
              background: hoverBtn1 ? "#10b981" : "#34d399", 
              color: "#042916",
              fontWeight: "700",
              fontSize: "15.5px",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: hoverBtn1 ? "0 12px 30px rgba(16, 185, 129, 0.4)" : "0 6px 20px rgba(52, 211, 153, 0.3)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hoverBtn1 ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            Mulai Pendaftaran
          </button>

          {/* Tombol 2: Informasi (Diubah dari Lihat Jadwal) */}
          <button
            onClick={() => navigate("/informasi")}
            onMouseEnter={() => setHoverBtn2(true)}
            onMouseLeave={() => setHoverBtn2(false)}
            style={{
              padding: "14px 32px",
              background: hoverBtn2 ? "rgba(255,255,255,0.15)" : "transparent",
              color: "white",
              fontWeight: "600",
              fontSize: "15.5px",
              border: hoverBtn2 ? "2px solid #ffffff" : "2px solid rgba(255,255,255,0.4)",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hoverBtn2 ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            Informasi
          </button>
        </div>
      </div>

      {/* Kolom Kanan: Gambar Bergerak (Slide) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
        
        {/* Tombol Panah Kiri */}
        <button 
          onClick={prevSlide} 
          onMouseEnter={() => setHoverArrowLeft(true)}
          onMouseLeave={() => setHoverArrowLeft(false)}
          style={{
            ...arrowStyleBase,
            left: "-15px",
            background: hoverArrowLeft ? "#34d399" : "rgba(4, 41, 22, 0.7)",
            color: hoverArrowLeft ? "#042916" : "white",
            boxShadow: hoverArrowLeft ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
            transform: hoverArrowLeft ? "translateY(-50%) scale(1.1)" : "translateY(-50%) scale(1)"
          }}
        >
          ❮
        </button>

        {/* Container Gambar Utama */}
        <div 
          style={{ 
            width: "100%", 
            maxWidth: "460px", 
            overflow: "hidden", 
            borderRadius: "24px", 
            boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
            border: "4px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div 
            style={{ 
              display: "flex", 
              transform: `translateX(-${currentSlide * 100}%)`, 
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" 
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                style={{ 
                  width: "100%",
                  minWidth: "100%",
                  height: "340px",
                  objectFit: "cover",
                  boxSizing: "border-box",
                }}
              />
            ))}
          </div>
        </div>

        {/* Tombol Panah Kanan */}
        <button 
          onClick={nextSlide} 
          onMouseEnter={() => setHoverArrowRight(true)}
          onMouseLeave={() => setHoverArrowRight(false)}
          style={{
            ...arrowStyleBase,
            right: "-15px",
            background: hoverArrowRight ? "#34d399" : "rgba(4, 41, 22, 0.7)",
            color: hoverArrowRight ? "#042916" : "white",
            boxShadow: hoverArrowRight ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
            transform: hoverArrowRight ? "translateY(-50%) scale(1.1)" : "translateY(-50%) scale(1)"
          }}
        >
          ❯
        </button>

        {/* Indikator Titik (Dots) */}
        <div style={{ display: "flex", gap: "8px", marginTop: "24px" }}>
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: currentSlide === index ? "#34d399" : "rgba(255,255,255,0.35)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

const arrowStyleBase = {
  position: "absolute",
  top: "42%",
  border: "none",
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 10,
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
};

export default Hero;