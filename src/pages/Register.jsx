import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [role, setRole] = useState("pengajar");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!nama || !username || !password || !konfirmasiPassword) {
      alert("Semua data wajib diisi!");
      return;
    }

    if (password !== konfirmasiPassword) {
      alert("Konfirmasi password tidak sama!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const cek = users.find((u) => u.username === username);

    if (cek) {
      alert("Username sudah digunakan!");
      return;
    }

    users.push({
      nama,
      username,
      password,
      role,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi Berhasil!");

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0f766e,#16a34a,#22c55e)",
      }}
    >
      <div
        style={{
          width: "430px",
          background: "#fff",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 15px 35px rgba(0,0,0,.25)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <div style={{ fontSize: "60px" }}>📝</div>

          <h2 style={{ color: "#065f46", margin: 0 }}>
            Register SIM BTA
          </h2>

          <p style={{ color: "#666" }}>
            Buat akun untuk masuk ke sistem
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Konfirmasi Password"
            value={konfirmasiPassword}
            onChange={(e) =>
              setKonfirmasiPassword(e.target.value)
            }
            style={inputStyle}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          >
            <option value="pengajar">👨‍🏫 Pengajar</option>
            <option value="pimpinan">🏢 Pimpinan</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              border: "none",
              borderRadius: "10px",
              background: "#16a34a",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Daftar Sekarang
          </button>
        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <span style={{ color: "#666" }}>
            Sudah punya akun?
          </span>

          <button
            type="button"
            onClick={() => navigate("/login")}
            style={{
              marginLeft: "10px",
              background: "none",
              border: "none",
              color: "#16a34a",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

export default Register;