import React, { useState } from 'react';

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #042916 0%, #0b7a3e 100%)", // Gradasi hijau tua premium
        color: "#ffffff",
        padding: "50px 40px 30px 40px",
        marginTop: "60px",
        fontFamily: "'Inter', sans-serif",
        borderTop: "4px solid #10b981", // Garis aksen hijau di bagian atas
        boxShadow: "0 -10px 35px rgba(4, 41, 22, 0.05)",
      }}
    >
      {/* Grid Konten Utama Footer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "40px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Garis pembatas tipis
        }}
      >
        {/* Kolom 1: Branding Sistem */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px", color: "#ffffff" }}>
            SIM BTA
          </h3>
          <p style={{ fontSize: "14px", fontWeight: "600", color: "#a7f3d0", margin: 0 }}>
            Universitas Nurul Huda
          </p>
          <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#cbd5e1", margin: "6px 0 0 0", maxWidth: "300px" }}>
            Sistem Informasi Manajemen BTA terintegrasi untuk mendukung efisiensi akademik dan pengelolaan layanan manajemen Al-Qur'an di lingkungan kampus.
          </p>
        </div>

        {/* Kolom 2: Tautan Pintas */}
        <div>
          <h4 style={{ fontSize: "15px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#10b981", margin: "0 0 16px 0" }}>
            Tautan Pintas
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { name: "Beranda Utama", url: "#" },
              { name: "Situs Resmi UNUHA", url: "https://unuha.ac.id" },
              { name: "Sistem Informasi Akademik", url: "#" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color: hoveredLink === idx ? "#ffffff" : "#94a3b8",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    transform: hoveredLink === idx ? "translateX(4px)" : "translateX(0)"
                  }}
                >
                  <span style={{ fontSize: "10px" }}>➔</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Informasi Kontak & Lokasi Kampus */}
        <div>
          <h4 style={{ fontSize: "15px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#10b981", margin: "0 0 16px 0" }}>
            Kontak Kampus
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#cbd5e1", lineHeight: "1.5" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span>📍</span> 
              <span>Jl. Kota Baru, Sukaraja, Kec. Buay Madang, Kabupaten Ogan Komering Ulu Timur, Sumatera Selatan.</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>🌐</span> 
              <span>www.unuha.ac.id</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Hak Cipta */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "12.5px",
          color: "#94a3b8"
        }}
      >
        <p style={{ margin: 0 }}>
          © {currentYear} <strong>SIM BTA</strong>. All Rights Reserved.
        </p>
        <p style={{ margin: 0, color: "#64748b" }}>
          Versi 1.0.0
        </p>
      </div>
    </footer>
  );
}

export default Footer;