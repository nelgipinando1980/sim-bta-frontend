import React, { useState } from 'react';

function Informasi() {
  // Hanya membutuhkan satu state utama untuk performa optimal
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [activeHover, setActiveHover] = useState({ cardId: null, btnId: null, closeBtn: false });

  const infoList = [
    {
      id: 1,
      tag: "Akademik",
      tagColor: "#0b7a3e",
      tagBg: "rgba(11, 122, 62, 0.08)",
      date: "09 Juli 2026",
      title: "Pendaftaran Program BTA Semester Ganjil 2026/2027 Telah Dibuka",
      desc: "Diberitahukan kepada seluruh mahasiswa Universitas Nurul Huda bahwa pendaftaran program sertifikasi BTA gelombang pertama resmi dibuka hingga akhir bulan ini.",
      detail: "Untuk melakukan pendaftaran, mahasiswa aktif diharapkan login ke akun SIM BTA masing-masing, masuk ke menu 'Pendaftaran Kursus', lalu unggah bukti pembayaran kelengkapan administrasi akademik. Gelombang pertama dibuka dari tanggal 9 Juli hingga 31 Juli 2026. Kelas orientasi perdana akan diumumkan lewat email terdaftar."
    },
    {
      id: 2,
      tag: "Ujian",
      tagColor: "#b91c1c",
      tagBg: "rgba(185, 28, 28, 0.08)",
      date: "05 Juli 2026",
      title: "Jadwal Pelaksanaan Ujian Munaqosyah BTA Gelombang II",
      desc: "Pelaksanaan ujian praktik membaca dan menulis Al-Qur'an (Munaqosyah) akan dilaksanakan secara tatap muka di laboratorium keagamaan kampus utama.",
      detail: "Ujian Munaqosyah akan diselenggarakan pada tanggal 15-17 Juli 2026 mulai pukul 08:00 WIB. Mahasiswa diwajibkan membawa kartu kendali setoran hafalan, memakai pakaian kemeja putih rapi, bawahan gelap, serta menggunakan almamater Universitas Nurul Huda. Daftar pembagian nomor urut meja penguji dapat diunduh pada lampiran akun masing-masing."
    },
    {
      id: 3,
      tag: "Pengumuman",
      tagColor: "#b45309",
      tagBg: "rgba(180, 83, 9, 0.08)",
      date: "28 Juni 2026",
      title: "Panduan Teknis Penggunaan Aplikasi Baru SIM BTA",
      desc: "Kini mahasiswa dapat melihat grafik kelulusan, jadwal bimbingan, dan mengunduh sertifikat digital langsung melalui akun dashboard SIM BTA masing-masing.",
      detail: "Pembaruan sistem versi 1.0.0 ini berfokus pada kemudahan aksesibilitas mahasiswa. Mahasiswa kini bisa mengajukan berkas ujian secara online, memantau riwayat nilai BTA, hingga mencetak sertifikat kelulusan mandiri berbarcode resmi tanpa perlu mengantre di biro administrasi kampus."
    }
  ];

  return (
    <div style={{ padding: "40px 24px", fontFamily: "'Inter', sans-serif", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
      
      {/* Header Halaman */}
      <div style={{ marginBottom: "35px", borderBottom: "1px solid #e2ece7", paddingBottom: "20px" }}>
        <h2 style={{ color: "#042916", fontSize: "26px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>
          Pusat Informasi & Pengumuman
        </h2>
        <p style={{ color: "#64748b", margin: "6px 0 0 0", fontSize: "14.5px", lineHeight: "1.5" }}>
          Temukan berita terbaru, jadwal akademik, dan pengumuman resmi seputar bimbingan Al-Qur'an.
        </p>
      </div>

      {/* Grid List Pengumuman Modern (2 Kolom Dinamis di Layar Lebar) */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", 
        gap: "24px", 
        width: "100%" 
      }}>
        {infoList.map((item) => {
          const isCardHovered = activeHover.cardId === item.id;
          const isBtnHovered = activeHover.btnId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedInfo(item)}
              onMouseEnter={() => setActiveHover(prev => ({ ...prev, cardId: item.id }))}
              onMouseLeave={() => setActiveHover(prev => ({ ...prev, cardId: null }))}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid",
                borderColor: isCardHovered ? "#0b7a3e" : "#e2ece7",
                boxShadow: isCardHovered ? "0 12px 30px rgba(11, 122, 62, 0.08)" : "0 2px 8px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "220px",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isCardHovered ? "translateY(-4px)" : "translateY(0)",
                cursor: "pointer"
              }}
            >
              <div>
                {/* Meta Bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ background: item.tagBg, color: item.tagColor, fontSize: "11px", fontWeight: "700", padding: "4px 12px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {item.tag}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                    📅 {item.date}
                  </span>
                </div>

                {/* Judul & Deskripsi */}
                <h3 style={{ color: "#042916", fontSize: "17.5px", fontWeight: "700", margin: "0 0 10px 0", lineHeight: "1.45" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#475569", fontSize: "13.5px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                  {item.desc}
                </p>
              </div>

              {/* Tombol Baca Detail */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedInfo(item);
                }}
                onMouseEnter={() => setActiveHover(prev => ({ ...prev, btnId: item.id }))}
                onMouseLeave={() => setActiveHover(prev => ({ ...prev, btnId: null }))}
                style={{
                  padding: "10px 20px",
                  background: isBtnHovered ? "#042916" : "transparent",
                  color: isBtnHovered ? "#ffffff" : "#0b7a3e",
                  border: "1px solid",
                  borderColor: isBtnHovered ? "#042916" : "#0b7a3e",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%"
                }}
              >
                <span>Baca Selengkapnya</span>
                <span style={{ transform: isBtnHovered ? "translateX(3px)" : "translateX(0)", transition: "transform 0.2s" }}>➔</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* ==================== POPUP MODAL INTERAKTIF (PREMIUM GLASSMORPHISM) ==================== */}
      {selectedInfo && (
        <div 
          onClick={() => setSelectedInfo(null)}
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(4, 41, 22, 0.25)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            boxSizing: "border-box"
          }}
        >
          {/* Kotak Modal */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "520px",
              padding: "32px",
              boxShadow: "0 25px 50px -12px rgba(4, 41, 22, 0.25)",
              border: "1px solid #e2ece7",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxSizing: "border-box"
            }}
          >
            {/* Header Modal */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ background: selectedInfo.tagBg, color: selectedInfo.tagColor, fontSize: "11px", fontWeight: "700", padding: "4px 12px", borderRadius: "100px", textTransform: "uppercase" }}>
                {selectedInfo.tag}
              </span>
              <span style={{ color: "#94a3b8", fontSize: "13px", fontWeight: "500" }}>
                📅 {selectedInfo.date}
              </span>
            </div>

            {/* Judul Detail */}
            <h3 style={{ color: "#042916", fontSize: "20px", fontWeight: "800", margin: 0, lineHeight: "1.4" }}>
              {selectedInfo.title}
            </h3>
            
            <div style={{ width: "100%", height: "1px", background: "#f1f5f9" }} />

            {/* Isi Konten Utama */}
            <p style={{ color: "#334155", fontSize: "14.5px", lineHeight: "1.65", margin: 0, fontWeight: "400", textAlign: "justify" }}>
              {selectedInfo.detail}
            </p>

            {/* Tombol Tutup */}
            <button
              onClick={() => setSelectedInfo(null)}
              onMouseEnter={() => setActiveHover(prev => ({ ...prev, closeBtn: true }))}
              onMouseLeave={() => setActiveHover(prev => ({ ...prev, closeBtn: false }))}
              style={{
                marginTop: "8px",
                padding: "12px 0",
                width: "100%",
                background: activeHover.closeBtn ? "#e2ece7" : "#f1f5f9",
                color: "#334155",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s ease"
              }}
            >
              Kembali ke Informasi
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Informasi;