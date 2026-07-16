import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function InputNilai() {
  // Contoh state untuk form
  const [formData, setFormData] = useState({ nim: "", nama: "", nilai: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data nilai berhasil disimpan!");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6", fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px", overflowY: "auto" }}>
        {/* Header Halaman */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ margin: "0", fontSize: "24px", color: "#0f172a" }}>📝 Input Nilai Peserta</h1>
          <p style={{ color: "#64748b", fontSize: "14px", marginTop: "5px" }}>
            Lengkapi data nilai peserta SIBTQ dengan cermat.
          </p>
        </div>

        {/* Form Input Card */}
        <div style={panelCardStyle}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gap: "20px" }}>
              <div>
                <label style={labelStyle}>NIM Peserta</label>
                <input type="text" style={inputStyle} placeholder="Masukkan NIM" onChange={(e) => setFormData({...formData, nim: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Nama Peserta</label>
                <input type="text" style={inputStyle} placeholder="Masukkan Nama" onChange={(e) => setFormData({...formData, nama: e.target.value})} />
              </div>
              <div>
                <label style={labelStyle}>Nilai Akhir</label>
                <input type="number" style={inputStyle} placeholder="0 - 100" onChange={(e) => setFormData({...formData, nilai: e.target.value})} />
              </div>
            </div>

            <div style={{ marginTop: "25px", display: "flex", gap: "10px" }}>
              <button type="submit" style={btnStyle}>Simpan Nilai</button>
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
  backgroundColor: "#059669", 
  color: "white", 
  border: "none", 
  borderRadius: "8px", 
  cursor: "pointer", 
  fontWeight: "600" 
};

export default InputNilai;