import { useState } from "react";
import Sidebar from "../components/Sidebar";

function DataPeserta() {
  const [peserta, setPeserta] = useState([
    {
      id: 1,
      nim: "231001",
      nama: "Ahmad Fauzi",
      prodi: "Sistem Informasi",
      status: "Aktif",
    },
  ]);

  const [form, setForm] = useState({
    nim: "",
    nama: "",
    prodi: "",
    status: "Aktif",
  });

  const tambahPeserta = () => {
    if (form.nim === "" || form.nama === "" || form.prodi === "") {
      alert("Semua data harus diisi!");
      return;
    }

    setPeserta([
      ...peserta,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      nim: "",
      nama: "",
      prodi: "",
      status: "Aktif",
    });
  };

  const hapusPeserta = (id) => {
    if (confirm("Yakin ingin menghapus peserta?")) {
      setPeserta(peserta.filter((item) => item.id !== id));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h2>Data Peserta BTA</h2>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3>Tambah Peserta</h3>

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
            type="text"
            placeholder="Program Studi"
            value={form.prodi}
            onChange={(e) =>
              setForm({ ...form, prodi: e.target.value })
            }
          />
          <br />
          <br />

          <button onClick={tambahPeserta}>
            Simpan Peserta
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
              <th>Prodi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {peserta.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nim}</td>
                <td>{item.nama}</td>
                <td>{item.prodi}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    style={{
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => hapusPeserta(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {peserta.length === 0 && (
              <tr>
                <td colSpan="6" align="center">
                  Belum ada peserta.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataPeserta;