import React, { useState } from 'react';

function Informasi() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [closeBtnHover, setCloseBtnHover] = useState(false);
  
  // FITUR UTAMA: State untuk menyimpan data pengumuman yang sedang aktif/diklik
  const [selectedInfo, setSelectedInfo] = useState(null);

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
    <div style={{ padding: "40px 20px", fontFamily: "'Inter', sans-serif", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
      
      {/* Header Halaman */}
      <div style={{ marginBottom: "30px", borderBottom: "2px solid #e2ece7", paddingBottom: "16px" }}>
        <h2 style={{ color: "#042916", fontSize: "24px", fontWeight: "800", margin: 0, letterSpacing: "-0.5px" }}>
          Pusat Informasi & Pengumuman
        </h2>
        <p style={{ color: "#52635c", margin: "4px 0 0 0", fontSize: "14px", fontWeight: "400" }}>
          Klik pada salah satu info atau tombol untuk memunculkan detail pengumuman lengkap.
        </p>
      </div>

      {/* Grid List Pengumuman */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
        {infoList.map((item) => {
          const isCardHovered = hoveredCard === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedInfo(item)} // KETIKA DIKLIK: Mengaktifkan isi detail modal
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px 30px",
                border: isCardHovered ? "1px solid rgba(11, 122, 62, 0.3)" : "1px solid #e2ece7",
                boxShadow: isCardHovered ? "0 15px 30px rgba(11, 122, 62, 0.05)" : "0 4px 12px rgba(0, 0, 0, 0.01)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isCardHovered ? "translateY(-2px)" : "translateY(0)",
                cursor: "pointer"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ background: item.tagBg, color: item.tagColor, fontSize: "11px", fontWeight: "700", padding: "4px 12px", borderRadius: "100px", textTransform: "uppercase" }}>
                  {item.tag}
                </span>
                <span style={{ color: "#94a3b8", fontSize: "12.5px", fontWeight: "500" }}>
                  📅 {item.date}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "280px" }}>
                  <h3 style={{ color: isCardHovered ? "#0b7a3e" : "#042916", fontSize: "17px", fontWeight: "700", margin: "0 0 8px 0", lineHeight: "1.4" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#4a5952", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Biar klik tombol gak dobel triger ke div luar
                    setSelectedInfo(item);
                  }}
                  onMouseEnter={() => setHoveredBtn(item.id)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    padding: "10px 20px",
                    background: hoveredBtn === item.id ? "#042916" : "transparent",
                    color: hoveredBtn === item.id ? "#ffffff" : "#0b7a3e",
                    border: hoveredBtn === item.id ? "1px solid #042916" : "1px solid #0b7a3e",
                    borderRadius: "100px",
                    fontSize: "12.5px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "flex-end"
                  }}
                >
                  <span>Baca Detail</span>
                  <span>➔</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ==================== FITUR POPUP MODAL INTERAKTIF ==================== */}
      {selectedInfo && (
        <div 
          onClick={() => setSelectedInfo(null)} // Tutup modal saat area transparan luar diklik
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(4, 41, 22, 0.4)", // Overlay gelap transparan beraksen hijau gelap
            backdropFilter: "blur(8px)", // Efek Frosted Glass premium
            WebkitBackdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999, // Supaya berada di lapisan paling atas layar
            padding: "20px",
            boxSizing: "border-box"
          }}
        >
          {/* Konten Kotak Modal */}
          <div 
            onClick={(e) => e.stopPropagation()} // Supaya saat isi modal diklik gak ikutan ketutup
            style={{
              background: "#ffffff",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "550px",
              padding: "35px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              border: "1px solid #e2ece7",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxSizing: "border-box"
            }}
          >
            {/* Header Modal */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ background: selectedInfo.tagBg, color: selectedInfo.tagColor, fontSize: "11px", fontWeight: "700", padding: "4px 12px", borderRadius: "100px", textTransform: "uppercase" }}>
                {selectedInfo.tag}
              </span>
              <span style={{ color: "#94a3b8", fontSize: "13px", fontWeight: "500" }}>
                📅 {selectedInfo.date}
              </span>
            </div>

            {/* Judul & Isi Detail Lengkap */}
            <h3 style={{ color: "#042916", fontSize: "19px", fontWeight: "800", margin: 0, lineHeight: "1.4" }}>
              {selectedInfo.title}
            </h3>
            
            <div style={{ width: "100%", height: "1px", background: "#f1f5f9" }} />

            <p style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6", margin: 0, fontWeight: "400" }}>
              {selectedInfo.detail}
            </p>

            {/* Tombol Tutup / Close */}
            <button
              onClick={() => setSelectedInfo(null)}
              onMouseEnter={() => setCloseBtnHover(true)}
              onMouseLeave={() => setCloseBtnHover(false)}
              style={{
                marginTop: "10px",
                padding: "11px 0",
                width: "100%",
                background: closeBtnHover ? "#e2ece7" : "#f1f5f9",
                color: "#475569",
                border: "none",
                borderRadius: "12px",
                fontSize: "13.5px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
            >
              Tutup Pengumuman
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Informasi;