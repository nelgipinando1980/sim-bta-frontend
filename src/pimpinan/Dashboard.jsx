import Sidebar from "../components/Sidebar";

function Dashboard() {
  const nama = localStorage.getItem("nama");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f5f7fa",
          padding: "30px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h1 style={{ color: "#0B7A3E" }}>
            Dashboard Pimpinan
          </h1>

          <h2>Selamat Datang, {nama}</h2>

          <p>
            Anda login sebagai <b>PIMPINAN</b>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <Card title="📊 Lihat Laporan" />
          <Card title="📥 Download Laporan" />
        </div>
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div
      style={{
        width: "260px",
        background: "#fff",
        borderRadius: "15px",
        padding: "25px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <h3>{title}</h3>

      <p style={{ color: "#666" }}>
        Klik menu di sidebar untuk membuka halaman.
      </p>
    </div>
  );
}

export default Dashboard;