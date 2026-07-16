import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function UpdateNilai() {
  // Contoh state untuk form update
  const [formData, setFormData] = useState({ nim: "", nilaiBaru: "" });

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Data nilai berhasil diperbarui!");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6", fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px", overflowY: "auto" }}>
        {/* Header Halaman */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ margin: "0", fontSize: "24px", color: "#0f172a" }}>✏️ Update Nilai</h1>
          <p style={{ color: "#64748b", fontSize: "14px", marginTop: "5px" }}>
            Ubah atau perbarui data nilai peserta yang sudah terinput sebelumnya.
          </p>
        </div>

        {/* Form Update Card */}
        <div style={panelCardStyle}>
          <form onSubmit={handleUpdate}>
            <div style={{ display: "grid", gap: "20px" }}>
              <div>
                <label style={labelStyle}>Cari Berdasarkan NIM</label>
                <input 
                  type="text" 
                  style={inputStyle} 
                  placeholder="Masukkan NIM peserta..." 
                  onChange={(e) => setFormData({...formData, nim: e.target.value})} 
                />
              </div>
              <div>
                <label style={labelStyle}>Nilai Baru</label>
                <input 
                  type="number" 
                  style={inputStyle} 
                  placeholder="Masukkan nilai yang diperbarui..." 
                  onChange={(e) => setFormData({...formData, nilaiBaru: e.target.value})} 
                />
              </div>
            </div>

            <div style={{ marginTop: "25px", display: "flex", gap: "10px" }}>
              <button type="submit" style={btnStyle}>Simpan Perubahan</button>
              <button type="button" style={{...btnStyle, backgroundColor: "#f1f5f9", color: "#475569"}} onClick={() => window.history.back()}>Kembali</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* Gaya Komponen yang Diselaraskan */
const panelCardStyle = { 
  backgroundColor: "white", 
  padding: "30px", 
  borderRadius: "16px", 
  border: "1px solid #e2e8f0", 
  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
  maxWidth: "600px"
};

const labelStyle = { display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#334155" };

const inputStyle = { 
  width: "100%", 
  padding: "12px", 
  borderRadius: "8px", 
  border: "1px solid #cbd5e1", 
  fontSize: "14px",
  boxSizing: "border-box" 
};

const btnStyle = { 
  padding: "12px 24px", 
  backgroundColor: "#0891b2", // Menggunakan warna biru kehijauan yang berbeda namun tetap selaras
  color: "white", 
  border: "none", 
  borderRadius: "8px", 
  cursor: "pointer", 
  fontWeight: "600" 
};

export default UpdateNilai;