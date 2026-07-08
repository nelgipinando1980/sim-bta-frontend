import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (!user) {
      alert("Username atau Password salah!");
      return;
    }

    localStorage.setItem("role", user.role);
    localStorage.setItem("nama", user.nama);

    navigate("/admin");
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
          width: "400px",
          background: "#fff",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 15px 35px rgba(0,0,0,.25)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              fontSize: "60px",
            }}
          >
            📖
          </div>

          <h2
            style={{
              color: "#065f46",
              margin: 0,
            }}
          >
            SIM BTA
          </h2>

          <p
            style={{
              color: "#666",
            }}
          >
            Sistem Informasi Baca Tulis Al-Qur'an
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <label
            style={{
              fontWeight: "bold",
            }}
          >
            Username
          </label>

          <input
            type="text"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              fontWeight: "bold",
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <hr
          style={{
            margin: "25px 0",
          }}
        />

        <div
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#666",
            }}
          >
            Belum punya akun?
          </p>

          <button
            onClick={() => navigate("/register")}
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #16a34a",
              background: "white",
              color: "#16a34a",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Buat Akun
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;