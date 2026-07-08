import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Jadwal() {
  const [jadwal, setJadwal] = useState([
    {
      id: 1,
      tanggal: "2026-07-20",
      waktu: "08:00",
      tempat: "Laboratorium Komputer",
    },
  ]);

  const [form, setForm] = useState({
    tanggal: "",
    waktu: "",
    tempat: "",
  });

  const [editId, setEditId] = useState(null);

  const simpan = () => {
    if (
      form.tanggal === "" ||
      form.waktu === "" ||
      form.tempat === ""
    ) {
      alert("Semua data harus diisi");
      return;
    }

    if (editId) {
      setJadwal(
        jadwal.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );
      setEditId(null);
    } else {
      setJadwal([
        ...jadwal,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      tanggal: "",
      waktu: "",
      tempat: "",
    });
  };

  const edit = (item) => {
    setEditId(item.id);

    setForm({
      tanggal: item.tanggal,
      waktu: item.waktu,
      tempat: item.tempat,
    });
  };

  const hapus = (id) => {
    if (window.confirm("Yakin ingin menghapus jadwal?")) {
      setJadwal(jadwal.filter((item) => item.id !== id));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h2>Jadwal BTA</h2>

        <input
          type="date"
          value={form.tanggal}
          onChange={(e) =>
            setForm({ ...form, tanggal: e.target.value })
          }
        />

        <br /><br />

        <input
          type="time"
          value={form.waktu}
          onChange={(e) =>
            setForm({ ...form, waktu: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Tempat"
          value={form.tempat}
          onChange={(e) =>
            setForm({ ...form, tempat: e.target.value })
          }
        />

        <br /><br />

        <button onClick={simpan}>
          {editId ? "Update Jadwal" : "Tambah Jadwal"}
        </button>

        <br /><br />

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
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Tempat</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {jadwal.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.tanggal}</td>
                <td>{item.waktu}</td>
                <td>{item.tempat}</td>

                <td>
                  <button onClick={() => edit(item)}>
                    Edit
                  </button>

                  <button
                    onClick={() => hapus(item.id)}
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

            {jadwal.length === 0 && (
              <tr>
                <td colSpan="5" align="center">
                  Belum ada jadwal.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Jadwal;