import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    }

    // Pengajar
    else if (username === "pengajar" && password === "pengajar123") {
      localStorage.setItem("role", "pengajar");
      navigate("/admin");
    }

    // Pimpinan
    else if (username === "pimpinan" && password === "pimpinan123") {
      localStorage.setItem("role", "pimpinan");
      navigate("/admin");
    }

    else {
      alert("Username atau Password salah!");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2 align="center">Login SIM BTA</h2>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <hr />

      <p><b>Admin</b> : admin / admin123</p>
      <p><b>Pengajar</b> : pengajar / pengajar123</p>
      <p><b>Pimpinan</b> : pimpinan / pimpinan123</p>
    </div>
  );
}

export default Login;