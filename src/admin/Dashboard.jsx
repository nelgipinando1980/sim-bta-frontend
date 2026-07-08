import Sidebar from "../components/Sidebar";

function Dashboard() {
  const role = localStorage.getItem("role");

  let judul = "Dashboard";

  if (role === "admin") {
    judul = "Dashboard Admin";
  } else if (role === "pengajar") {
    judul = "Dashboard Pengajar";
  } else if (role === "pimpinan") {
    judul = "Dashboard Pimpinan";
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>{judul}</h1>

        <h3>Selamat Datang di SIM BTA</h3>

        <p>Silakan pilih menu di sebelah kiri.</p>
      </div>
    </div>
  );
}

export default Dashboard;