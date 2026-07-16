import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function HapusNilai() {
  const [dataNilai, setDataNilai] = useState([]);

  // Load data nilai saat halaman dibuka
  useEffect(() => {
    const nilaiLama = JSON.parse(localStorage.getItem("data_nilai")) || [];
    setDataNilai(nilaiLama);
  }, []);

  // Fungsi untuk menghapus data
  const handleHapus = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data nilai ini?")) {
      const dataBaru = dataNilai.filter((item) => item.id !== id);
      setDataNilai(dataBaru);
      localStorage.setItem("data_nilai", JSON.stringify(dataBaru));
      alert("Data berhasil dihapus!");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h2 style={{ color: "#b91c1c", marginBottom: "5px" }}>🗑️ Hapus Nilai Mahasiswa</h2>
        <p style={{ color: "#64748b", marginBottom: "25px", fontSize: "14px" }}>
          Hapus data penilaian yang sudah tidak relevan atau salah input.
        </p>

        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", textAlign: "left" }}>
                <th style={thStyle}>No</th>
                <th style={thStyle}>Nama Mahasiswa</th>
                <th style={thStyle}>NIM</th>
                <th style={thStyle}>Nilai</th>
                <th style={thStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataNilai.length > 0 ? (
                dataNilai.map((item, index) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={tdStyle}>{item.nama}</td>
                    <td style={tdStyle}>{item.nim}</td>
                    <td style={tdStyle}><strong>{item.nilai}</strong></td>
                    <td style={tdStyle}>
                      <button 
                        onClick={() => handleHapus(item.id)}
                        style={{ 
                          backgroundColor: "#fee2e2", 
                          color: "#b91c1c", 
                          border: "none", 
                          padding: "6px 12px", 
                          borderRadius: "6px", 
                          cursor: "pointer",
                          fontSize: "12px",
                          fontWeight: "bold"
                        }}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "30px", color: "#94a3b8" }}>
                    Tidak ada data nilai yang ditemukan.
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

const thStyle = { padding: "12px", fontSize: "13px", fontWeight: "bold", color: "#475569" };
const tdStyle = { padding: "12px", fontSize: "13px", color: "#1e293b" };

export default HapusNilai;