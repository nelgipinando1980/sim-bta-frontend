import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Pengguna() {
  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Administrator",
      username: "admin",
      role: "Admin",
    },
    {
      id: 2,
      nama: "Pengajar BTA",
      username: "pengajar",
      role: "Pengajar",
    },
    {
      id: 3,
      nama: "Pimpinan",
      username: "pimpinan",
      role: "Pimpinan",
    },
  ]);

  const [form, setForm] = useState({
    nama: "",
    username: "",
    role: "Pengajar",
  });

  const [editId, setEditId] = useState(null);

  const simpan = () => {
    if (form.nama === "" || form.username === "") {
      alert("Semua data harus diisi");
      return;
    }

    if (editId) {
      setUsers(
        users.map((u) =>
          u.id === editId ? { ...u, ...form } : u
        )
      );

      setEditId(null);
    } else {
      setUsers([
        ...users,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      nama: "",
      username: "",
      role: "Pengajar",
    });
  };

  const edit = (user) => {
    setEditId(user.id);

    setForm({
      nama: user.nama,
      username: user.username,
      role: user.role,
    });
  };

  const hapus = (id) => {
    if (window.confirm("Yakin ingin menghapus pengguna?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h2>Manajemen Pengguna</h2>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Nama"
            value={form.nama}
            onChange={(e) =>
              setForm({ ...form, nama: e.target.value })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <br />
          <br />

          <select
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option>Admin</option>
            <option>Pengajar</option>
            <option>Pimpinan</option>
          </select>

          <br />
          <br />

          <button onClick={simpan}>
            {editId ? "Update Pengguna" : "Tambah Pengguna"}
          </button>
        </div>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Username</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>

                <td>
                  <button onClick={() => edit(user)}>
                    Edit
                  </button>

                  <button
                    onClick={() => hapus(user.id)}
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="5" align="center">
                  Belum ada pengguna.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pengguna;