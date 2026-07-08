import { Link } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role");

  const menuStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "12px 0",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        width: "230px",
        minHeight: "100vh",
        background: "#0B7A3E",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "5px" }}>SIM BTA</h2>
      <p style={{ marginTop: 0 }}>Universitas Nurul Huda</p>

      <hr />

      <p style={{ fontSize: "14px" }}>
        Login sebagai :
        <br />
        <b>{role?.toUpperCase()}</b>
      </p>

      <hr />

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {/* Dashboard */}
        <li>
          <Link to="/admin" style={menuStyle}>
            🏠 Dashboard
          </Link>
        </li>

        {/* ================= ADMIN ================= */}
        {role === "admin" && (
          <>
            <li>
              <Link to="/admin/peserta" style={menuStyle}>
                👨‍🎓 Data Peserta
              </Link>
            </li>

            <li>
              <Link to="/admin/jadwal" style={menuStyle}>
                📅 Jadwal
              </Link>
            </li>

            <li>
              <Link to="/admin/penilaian" style={menuStyle}>
                📝 Penilaian
              </Link>
            </li>

            <li>
              <Link to="/admin/laporan" style={menuStyle}>
                📊 Laporan
              </Link>
            </li>

            <li>
              <Link to="/admin/pengguna" style={menuStyle}>
                👥 Pengguna
              </Link>
            </li>

            <li>
              <Link to="/admin/pengaturan" style={menuStyle}>
                ⚙ Pengaturan
              </Link>
            </li>
          </>
        )}

        {/* ================= PENGAJAR ================= */}
        {role === "pengajar" && (
          <>
            <li>
              <Link to="/admin/peserta" style={menuStyle}>
                👨‍🎓 Data Peserta
              </Link>
            </li>

            <li>
              <Link to="/admin/penilaian" style={menuStyle}>
                📝 Penilaian
              </Link>
            </li>
          </>
        )}

        {/* ================= PIMPINAN ================= */}
        {role === "pimpinan" && (
          <>
            <li>
              <Link to="/admin/laporan" style={menuStyle}>
                📊 Laporan
              </Link>
            </li>
          </>
        )}

        <hr />

        <li>
          <button
            onClick={() => {
              localStorage.removeItem("role");
              window.location.href = "/login";
            }}
            style={{
              width: "100%",
              padding: "10px",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            🚪 Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;