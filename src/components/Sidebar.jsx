import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role");
  const location = useLocation(); // Untuk mendeteksi halaman aktif jika dibutuhkan nanti
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredLogout, setHoveredLogout] = useState(false);

  // Fungsi untuk mengecek apakah menu sedang di-hover atau aktif
  const getMenuItemStyle = (index, path) => {
    const isActive = location.pathname === path;
    const isHovered = hoveredIndex === index;

    return {
      display: "flex",
      alignItems: "center",
      color: isActive ? "#ffffff" : "#d1fae5",
      textDecoration: "none",
      padding: "12px 16px",
      fontSize: "15px",
      fontWeight: isActive ? "600" : "400",
      borderRadius: "12px",
      background: isActive 
        ? "rgba(255, 255, 255, 0.15)" 
        : isHovered 
        ? "rgba(255, 255, 255, 0.08)" 
        : "transparent",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      marginBottom: "6px",
      transform: isHovered ? "translateX(4px)" : "translateX(0)",
    };
  };

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #042916 0%, #0b7a3e 100%)",
        color: "white",
        padding: "30px 20px",
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        boxShadow: "4px 0 25px rgba(4, 41, 22, 0.15)",
      }}
    >
      {/* Header Aplikasi */}
      <div style={{ marginBottom: "25px", paddingLeft: "8px" }}>
        <h2 style={{ margin: "0 0 4px 0", fontSize: "22px", fontWeight: "800", letterSpacing: "-0.5px" }}>
          SIM BTA
        </h2>
        <p style={{ margin: 0, fontSize: "12px", color: "#a7f3d0", opacity: 0.8, fontWeight: "300" }}>
          Universitas Nurul Huda
        </p>
      </div>

      {/* Box Info Login User */}
      <div 
        style={{ 
          background: "rgba(255, 255, 255, 0.06)", 
          padding: "12px 16px", 
          borderRadius: "14px", 
          marginBottom: "30px",
          border: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <span style={{ fontSize: "11px", color: "#a7f3d0", opacity: 0.7, uppercase: "true", letterSpacing: "0.5px" }}>
          LOGIN SEBAGAI
        </span>
        <div style={{ fontSize: "14px", fontWeight: "700", marginTop: "2px", color: "#ffffff" }}>
          👤 {role ? role.toUpperCase() : "GUEST"}
        </div>
      </div>

      {/* Navigasi Menu */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
        
        {/* Dashboard */}
        <li>
          <Link 
            to="/admin" 
            style={getMenuItemStyle(0, "/admin")}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span style={{ marginRight: "12px", fontSize: "18px" }}>🏠</span> Dashboard
          </Link>
        </li>

        {/* Garis Pembatas Tipis */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "15px 0" }} />

        {/* ================= ADMIN MENUS ================= */}
        {role === "admin" && (
          <>
            <li>
              <Link to="/admin/peserta" style={getMenuItemStyle(1, "/admin/peserta")} onMouseEnter={() => setHoveredIndex(1)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>👨‍🎓</span> Data Peserta
              </Link>
            </li>
            <li>
              <Link to="/admin/jadwal" style={getMenuItemStyle(2, "/admin/jadwal")} onMouseEnter={() => setHoveredIndex(2)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>📅</span> Jadwal Kuliah
              </Link>
            </li>
            <li>
              <Link to="/admin/penilaian" style={getMenuItemStyle(3, "/admin/penilaian")} onMouseEnter={() => setHoveredIndex(3)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>📝</span> Penilaian
              </Link>
            </li>
            <li>
              <Link to="/admin/laporan" style={getMenuItemStyle(4, "/admin/laporan")} onMouseEnter={() => setHoveredIndex(4)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>📊</span> Laporan Studi
              </Link>
            </li>
            <li>
              <Link to="/admin/pengguna" style={getMenuItemStyle(5, "/admin/pengguna")} onMouseEnter={() => setHoveredIndex(5)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>👥</span> Manajemen Pengguna
              </Link>
            </li>
            <li>
              <Link to="/admin/pengaturan" style={getMenuItemStyle(6, "/admin/pengaturan")} onMouseEnter={() => setHoveredIndex(6)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>⚙️</span> Pengaturan
              </Link>
            </li>
          </>
        )}

        {/* ================= PENGAJAR MENUS ================= */}
        {role === "pengajar" && (
          <>
            <li>
              <Link to="/admin/peserta" style={getMenuItemStyle(1, "/admin/peserta")} onMouseEnter={() => setHoveredIndex(1)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>👨‍🎓</span> Data Peserta
              </Link>
            </li>
            <li>
              <Link to="/admin/penilaian" style={getMenuItemStyle(3, "/admin/penilaian")} onMouseEnter={() => setHoveredIndex(3)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>📝</span> Input Penilaian
              </Link>
            </li>
          </>
        )}

        {/* ================= PIMPINAN MENUS ================= */}
        {role === "pimpinan" && (
          <>
            <li>
              <Link to="/admin/laporan" style={getMenuItemStyle(4, "/admin/laporan")} onMouseEnter={() => setHoveredIndex(4)} onMouseLeave={() => setHoveredIndex(null)}>
                <span style={{ marginRight: "12px", fontSize: "18px" }}>📊</span> Laporan Studi
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Bagian Bawah: Tombol Logout */}
      <div style={{ marginTop: "auto", paddingTop: "20px" }}>
        <button
          onClick={() => {
            if (window.confirm("Apakah Anda yakin ingin keluar?")) {
              localStorage.removeItem("role");
              window.location.href = "/login";
            }
          }}
          onMouseEnter={() => setHoveredLogout(true)}
          onMouseLeave={() => setHoveredLogout(false)}
          style={{
            width: "100%",
            padding: "12px",
            background: hoveredLogout ? "#e11d48" : "rgba(220, 53, 69, 0.15)",
            color: hoveredLogout ? "#ffffff" : "#fca5a5",
            border: hoveredLogout ? "1px solid transparent" : "1px solid rgba(220, 53, 69, 0.3)",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <span>🚪</span> Keluar Sistem
        </button>
      </div>
    </div>
  );
}

export default Sidebar;