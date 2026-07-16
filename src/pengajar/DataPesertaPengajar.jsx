import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function DataPesertaPengajar() {
  const [peserta, setPeserta] = useState([]);

  useEffect(() => {
    // Tetap mengambil data dari key yang sama agar sinkron
    const dataLokal = JSON.parse(localStorage.getItem("data_peserta")) || [];
    setPeserta(dataLokal);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />
      
      <div style={{ flex: 1, padding: "40px" }}>
        <div style={{ marginBottom: "25px" }}>
          {/* Judul dibuat lebih spesifik untuk Pengajar */}
          <h2 style={{ color: "#064e3b", margin: 0 }}>Daftar Peserta BTA</h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>Halaman akses data peserta untuk pengajar.</p>
        </div>
        
        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0" }}>
            <thead>
              <tr style={{ backgroundColor: "#f1f5f9" }}>
                <th style={{...thStyle, borderRadius: "8px 0 0 8px"}}>No</th>
                <th style={thStyle}>Nama</th>
                <th style={thStyle}>NIM</th>
                <th style={thStyle}>Prodi</th>
                <th style={{...thStyle, borderRadius: "0 8px 8px 0"}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {peserta.length > 0 ? (
                peserta.map((item, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={{...tdStyle, fontWeight: "600"}}>{item.nama}</td>
                    <td style={tdStyle}>{item.nim}</td>
                    <td style={tdStyle}>{item.prodi}</td>
                    <td style={tdStyle}>
                      <span style={{ 
                        padding: "6px 12px", 
                        borderRadius: "8px", 
                        fontSize: "12px",
                        fontWeight: "600",
                        backgroundColor: item.status_verifikasi === "Diterima" ? "#dcfce7" : "#fef3c7",
                        color: item.status_verifikasi === "Diterima" ? "#166534" : "#92400e"
                      }}>
                        {item.status_verifikasi || "Menunggu"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "40px", color: "#94a3b8" }}>
                    Belum ada data peserta.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const thStyle = { padding: "16px", fontSize: "13px", fontWeight: "700", color: "#475569", textAlign: "left", textTransform: "uppercase", letterSpacing: "0.5px" };
const tdStyle = { padding: "16px", fontSize: "14px", color: "#1e293b", borderBottom: "1px solid #f1f5f9" };

export default DataPesertaPengajar;