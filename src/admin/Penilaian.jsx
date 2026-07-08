import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Penilaian() {
  const [dataNilai, setDataNilai] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    nim: "",
    nama: "",
    nilai: "",
  });

  const simpanData = () => {
    if (form.nim === "" || form.nama === "" || form.nilai === "") {
      alert("Semua data harus diisi!");
      return;
    }

    if (editId) {
      setDataNilai(
        dataNilai.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );

      setEditId(null);
    } else {
      setDataNilai([
        ...dataNilai,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setForm({
      nim: "",
      nama: "",
      nilai: "",
    });
  };

  const editData = (item) => {
    setEditId(item.id);

    setForm({
      nim: item.nim,
      nama: item.nama,
      nilai: item.nilai,
    });
  };

  const hapusData = (id) => {
    if (window.confirm("Yakin ingin menghapus nilai?")) {
      setDataNilai(dataNilai.filter((item) => item.id !== id));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h2>Input Nilai BTA</h2>

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
            placeholder="NIM"
            value={form.nim}
            onChange={(e) =>
              setForm({ ...form, nim: e.target.value })
            }
          />

          <br />
          <br />

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
            type="number"
            placeholder="Nilai"
            value={form.nilai}
            onChange={(e) =>
              setForm({ ...form, nilai: e.target.value })
            }
          />

          <br />
          <br />

          <button onClick={simpanData}>
            {editId ? "Update Nilai" : "Simpan Nilai"}
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
              <th>NIM</th>
              <th>Nama</th>
              <th>Nilai</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {dataNilai.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nim}</td>
                <td>{item.nama}</td>
                <td>{item.nilai}</td>

                <td>
                  <button onClick={() => editData(item)}>
                    Edit
                  </button>

                  <button
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => hapusData(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {dataNilai.length === 0 && (
              <tr>
                <td colSpan="5" align="center">
                  Belum ada data nilai.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Penilaian;