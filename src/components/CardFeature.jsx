import React, { useState } from "react";

function CardFeature() {
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverCard1, setHoverCard1] = useState(false);
  const [hoverCard2, setHoverCard2] = useState(false);

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "30px",
        padding: "0 40px 60px",
        maxWidth: "1240px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* 🟢 Kartu Utama: Pendaftaran (Premium Green Gradient) */}
      <div
        style={{
          background: "linear-gradient(135deg, #042916 0%, #0b7a3e 100%)",
          color: "white",
          borderRadius: "28px",
          padding: "45px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "0 15px 35px rgba(11, 122, 62, 0.12)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dekorasi Cahaya Abstrak di Latar Belakang */}
        <div style={{
          position: "absolute", bottom: "-40px", right: "-40px", width: "160px", height: "160px",
          background: "rgba(16, 185, 129, 0.15)", borderRadius: "50%", filter: "blur(30px)"
        }} />

        <span style={{
          color: "#a7f3d0", fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px",
          textTransform: "uppercase", marginBottom: "12px", display: "inline-block"
        }}>
          Peluang Baru
        </span>

        <h2 style={{ fontSize: "32px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px", lineHeight: "1.2" }}>
          Pendaftaran BTA Gelombang II
        </h2>

        <p style={{ marginTop: "15px", color: "#d1fae5", fontSize: "15px", lineHeight: "1.6", maxWidth: "520px", fontWeight: "300" }}>
          Bagi mahasiswa yang belum mengikuti atau belum menyelesaikan program BTA, 
          pendaftaran gelombang kedua kini telah dibuka secara daring. Amankan slot jadwal Anda.
        </p>

        <div>
          <button
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              border: "none",
              borderRadius: "50px",
              background: hoverBtn ? "#10b981" : "#ffffff",
              color: hoverBtn ? "#ffffff" : "#042916",
              fontWeight: "600",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: hoverBtn ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            Daftar Sekarang
          </button>
        </div>
      </div>

      {/* ⚪ Sisi Kanan: Kartu Menu Tambahan (Clean Dashboard Style) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {/* Kartu 1: Nilai */}
        <div
          onMouseEnter={() => setHoverCard1(true)}
          onMouseLeave={() => setHoverCard1(false)}
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "24px",
            boxShadow: hoverCard1 ? "0 15px 30px rgba(0,0,0,0.05)" : "0 8px 24px rgba(0,0,0,0.02)",
            border: hoverCard1 ? "1px solid rgba(11, 122, 62, 0.2)" : "1px solid #f1f5f9",
            transform: hoverCard1 ? "translateY(-5px)" : "translateY(0)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "20px" }}>📜</span>
            <h3 style={{ color: "#042916", fontSize: "18px", fontWeight: "700", margin: 0 }}>
              Nilai & Sertifikat
            </h3>
          </div>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0, lineHeight: "1.5", fontWeight: "400" }}>
            Pantau hasil penilaian ujian akhir Anda serta unduh e-sertifikat kelulusan langsung di sini.
          </p>
        </div>

        {/* Kartu 2: Pusat Bantuan */}
        <div
          onMouseEnter={() => setHoverCard2(true)}
          onMouseLeave={() => setHoverCard2(false)}
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "24px",
            boxShadow: hoverCard2 ? "0 15px 30px rgba(0,0,0,0.05)" : "0 8px 24px rgba(0,0,0,0.02)",
            border: hoverCard2 ? "1px solid rgba(11, 122, 62, 0.2)" : "1px solid #f1f5f9",
            transform: hoverCard2 ? "translateY(-5px)" : "translateY(0)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "20px" }}>💬</span>
            <h3 style={{ color: "#042916", fontSize: "18px", fontWeight: "700", margin: 0 }}>
              Pusat Bantuan
            </h3>
          </div>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0, lineHeight: "1.5", fontWeight: "400" }}>
            Butuh bantuan teknis? Hubungi helpdesk layanan BTA untuk respons cepat dari tim admin.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardFeature;