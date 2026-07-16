import Sidebar from "../components/Sidebar";

function DownloadLaporan() {
  const download = () => {
    alert("Download laporan berhasil.");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Download Laporan</h1>

        <button
          onClick={download}
          style={{
            padding: "12px 20px",
            background: "#198754",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Download Excel
        </button>
      </div>
    </div>
  );
}

export default DownloadLaporan;