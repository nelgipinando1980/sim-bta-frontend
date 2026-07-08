import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0B7A3E",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
      }}
    >
      <h2>Universitas Nurul Huda</h2>

      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Informasi
          </Link>
        </li>

        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Jadwal
          </Link>
        </li>

        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Daftar BTA
          </Link>
        </li>

        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Bantuan
          </Link>
        </li>
      </ul>

      <Link to="/login">
        <button
          style={{
            background: "white",
            color: "#0B7A3E",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login Admin
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;