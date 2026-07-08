import Sidebar from "../components/Sidebar";

function Dashboard() {
  const role = localStorage.getItem("role");
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
            Selamat Datang
          </h1>

          <h2>{nama}</h2>

          <p>
            Anda login sebagai <b>{role.toUpperCase()}</b>
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
          {role === "admin" && (
            <>
              <Card title="👨‍🎓 Data Peserta" />
              <Card title="📅 Jadwal" />
              <Card title="📝 Penilaian" />
              <Card title="📊 Laporan" />
              <Card title="👥 Pengguna" />
              <Card title="⚙ Pengaturan" />
            </>
          )}

          {role === "pengajar" && (
            <>
              <Card title="👨‍🎓 Data Peserta" />
              <Card title="📝 Penilaian" />
            </>
          )}

          {role === "pimpinan" && (
            <>
              <Card title="📊 Laporan Nilai" />
              <Card title="📥 Download Excel" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div
      style={{
        width: "250px",
        background: "white",
        borderRadius: "15px",
        padding: "25px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)",
      }}
    >
      <h3>{title}</h3>

      <p style={{ color: "#777" }}>
        Klik menu untuk membuka halaman.
      </p>
    </div>
  );
}

export default Dashboard;