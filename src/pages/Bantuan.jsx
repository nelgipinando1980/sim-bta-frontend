import React, { useState } from 'react';

function Kontak() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [btnHover, setBtnHover] = useState(false);
  const [cardHover, setCardHover] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${form.nama}, pesan Anda telah terkirim ke sistem bantuan UNUHA!`);
    setForm({ nama: '', email: '', pesan: '' });
  };

  // Data Kontak Resmi Universitas Nurul Huda (UNUHA)
  const kontakList = [
    { 
      id: 1, 
      icon: "📍", 
      title: "Alamat Kampus Utama", 
      desc: "Jl. Kota Baru No. 1, Sukaraja, Kec. Buay Madang, Kabupaten Ogan Komering Ulu Timur, Sumatera Selatan 32361" 
    },
    { 
      id: 2, 
      icon: "✉️", 
      title: "Email Resmi UNUHA", 
      desc: "rektorat@unuha.ac.id" 
    },
    { 
      id: 3, 
      icon: "📞", 
      title: "WhatsApp Akademik", 
      desc: "+62 821-7554-4636" 
    }
  ];

  return (
    <div style={{ padding: "40px 24px", fontFamily: "'Inter', sans-serif", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
      
      {/* Header Halaman */}
      <div style={{ marginBottom: "35px", borderBottom: "1px solid #e2ece7", paddingBottom: "20px" }}>
        <h2 style={{ color: "#042916", fontSize: "26px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>
          Pusat Bantuan & Kontak
        </h2>
        <p style={{ color: "#64748b", margin: "6px 0 0 0", fontSize: "14.5px", lineHeight: "1.5" }}>
          Punya pertanyaan seputar sertifikasi, perkuliahan, atau kendala sistem? Hubungi kami langsung.
        </p>
      </div>

      {/* Konten Utama: Grid Responsif */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "35px", alignItems: "start" }}>
        
        {/* Kolom Kiri: Informasi Kontak */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3 style={{ color: "#042916", fontSize: "18px", fontWeight: "700", margin: "0 0 5px 0" }}>
            Saluran Hubungan Resmi UNUHA
          </h3>
          
          {kontakList.map((item) => {
            const isHovered = cardHover === item.id;
            return (
              <div 
                key={item.id}
                onMouseEnter={() => setCardHover(item.id)}
                onMouseLeave={() => setCardHover(null)}
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "20px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: isHovered ? "#0b7a3e" : "#e2ece7",
                  boxShadow: isHovered ? "0 8px 24px rgba(11, 122, 62, 0.06)" : "0 2px 6px rgba(0,0,0,0.01)",
                  transition: "all 0.25s ease",
                  transform: isHovered ? "translateX(4px)" : "translateX(0)"
                }}
              >
                <span style={{ fontSize: "24px", lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <h4 style={{ color: "#042916", fontSize: "15px", fontWeight: "700", margin: "0 0 4px 0" }}>{item.title}</h4>
                  <p style={{ color: "#475569", fontSize: "13.5px", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kolom Kanan: Form Kirim Pesan */}
        <div style={{ background: "#ffffff", border: "1px solid #e2ece7", padding: "32px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.01)" }}>
          <h3 style={{ color: "#042916", fontSize: "18px", fontWeight: "700", margin: "0 0 6px 0" }}>
            Kirim Pesan Langsung
          </h3>
          <p style={{ color: "#64748b", fontSize: "13px", margin: "0 0 24px 0" }}>
            Isi formulir di bawah jika ingin mengajukan aduan atau kendala teknis akun secara langsung.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Nama Lengkap</label>
              <input 
                type="text" 
                required
                value={form.nama} 
                onChange={(e) => setForm({...form, nama: e.target.value})} 
                placeholder="Masukkan nama Anda" 
                style={inputStyle} 
              />
            </div>

            <div>
              <label style={labelStyle}>Alamat Email</label>
              <input 
                type="email" 
                required
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})} 
                placeholder="nama@mahasiswa.unuha.ac.id" 
                style={inputStyle} 
              />
            </div>

            <div>
              <label style={labelStyle}>Isi Pesan / Pertanyaan</label>
              <textarea 
                rows="4" 
                required
                value={form.pesan} 
                onChange={(e) => setForm({...form, pesan: e.target.value})} 
                placeholder="Tuliskan kendala atau pertanyaan Anda secara rinci..." 
                style={{ ...inputStyle, resize: "none" }} 
              />
            </div>

            <button 
              type="submit"
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                width: "100%",
                padding: "12px 0",
                background: btnHover ? "#042916" : "#0b7a3e",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s ease",
                marginTop: "4px"
              }}
            >
              Kirim Pesan
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  color: "#334155",
  fontSize: "13px",
  fontWeight: "600",
  marginBottom: "6px"
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  transition: "border-color 0.2s ease"
};

export default Kontak;