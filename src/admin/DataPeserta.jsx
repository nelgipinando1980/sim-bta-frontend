import { useState } from "react";
import Sidebar from "../components/Sidebar";

function DataPeserta() {
  const role = localStorage.getItem("role");

  const [peserta, setPeserta] = useState([
    {
      id: 1,
      nim: "231001",
      nama: "Ahmad Fauzi",
      prodi: "Sistem Informasi",
      status: "Aktif",
    },
    {
      id: 2,
      nim: "231002",
      nama: "Siti Aisyah",
      prodi: "Informatika",
      status: "Aktif",
    },
  ]);

  const [form, setForm] = useState({
    nim: "",
    nama: "",
    prodi: "",
    status: "Aktif",
  });

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  const simpanPeserta = () => {
    if (
      form.nim === "" ||
      form.nama === "" ||
      form.prodi === ""
    ) {
      alert("Semua data wajib diisi!");
      return;
    }

    if (editId) {
      setPeserta(
        peserta.map((item) =>
          item.id === editId
            ? { ...item, ...form }
            : item
        )
      );

      alert("Data berhasil diubah");
    } else {
      setPeserta([
        ...peserta,
        {
          id: Date.now(),
          ...form,
        },
      ]);

      alert("Data berhasil ditambahkan");
    }

    resetForm();
  };

  const editPeserta = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const hapusPeserta = (id) => {
    if (window.confirm("Hapus peserta ini?")) {
      setPeserta(
        peserta.filter((item) => item.id !== id)
      );
    }
  };

  const resetForm = () => {
    setForm({
      nim: "",
      nama: "",
      prodi: "",
      status: "Aktif",
    });

    setEditId(null);
  };

  const dataFilter = peserta.filter(
    (item) =>
      item.nama
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.nim.includes(search)
  );

  return (
    <div
      style={{
        display: "flex",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "#0B7A3E",
            marginBottom: "5px",
          }}
        >
          Data Peserta BTA
        </h1>

        <p style={{ color: "#666" }}>
          Kelola data peserta BTA Universitas Nurul Huda
        </p>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 3px 12px rgba(0,0,0,.1)",
            marginTop: "20px",
          }}
        >
          <h3 style={{ color: "#0B7A3E" }}>
            {editId
              ? "Edit Peserta"
              : "Tambah Peserta"}
          </h3>

          <input
            type="text"
            placeholder="NIM"
            value={form.nim}
            onChange={(e) =>
              setForm({
                ...form,
                nim: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Nama Peserta"
            value={form.nama}
            onChange={(e) =>
              setForm({
                ...form,
                nama: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Program Studi"
            value={form.prodi}
            onChange={(e) =>
              setForm({
                ...form,
                prodi: e.target.value,
              })
            }
            style={inputStyle}
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
            style={inputStyle}
          >
            <option>Aktif</option>
            <option>Tidak Aktif</option>
          </select>

          {role === "admin" && (
            <>
              <button
                onClick={simpanPeserta}
                style={btnHijau}
              >
                {editId
                  ? "Update Peserta"
                  : "Tambah Peserta"}
              </button>

              <button
                onClick={resetForm}
                style={btnKuning}
              >
                Reset
              </button>
            </>
          )}

                    <hr style={{ margin: "30px 0" }} />

          <h3 style={{ color: "#0B7A3E" }}>
            Daftar Peserta
          </h3>

          <input
            type="text"
            placeholder="🔍 Cari berdasarkan NIM atau Nama..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              ...inputStyle,
              marginBottom: "20px",
            }}
          />

          <div style={{ marginBottom: "15px" }}>
            <b>Total Peserta : {dataFilter.length}</b>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead
              style={{
                background: "#0B7A3E",
                color: "white",
              }}
            >
              <tr>
                <th style={thStyle}>No</th>
                <th style={thStyle}>NIM</th>
                <th style={thStyle}>Nama</th>
                <th style={thStyle}>Program Studi</th>
                <th style={thStyle}>Status</th>

                {role === "admin" && (
                  <th style={thStyle}>Aksi</th>
                )}
              </tr>
            </thead>

            <tbody>
              {dataFilter.length > 0 ? (
                dataFilter.map((item, index) => (
                  <tr key={item.id}>
                    <td style={tdStyle}>{index + 1}</td>
                    <td style={tdStyle}>{item.nim}</td>
                    <td style={tdStyle}>{item.nama}</td>
                    <td style={tdStyle}>{item.prodi}</td>
                    <td style={tdStyle}>{item.status}</td>

                    {role === "admin" && (
                      <td style={tdStyle}>
                        <button
                          style={btnBiru}
                          onClick={() => editPeserta(item)}
                        >
                          Edit
                        </button>

                        <button
                          style={btnMerah}
                          onClick={() => hapusPeserta(item.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={role === "admin" ? 6 : 5}
                    style={{
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    Data peserta tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
};

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const btnHijau = {
  background: "#198754",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};

const btnKuning = {
  background: "#ffc107",
  color: "black",
  border: "none",
  padding: "10px 18px",
  borderRadius: "5px",
  cursor: "pointer",
};

const btnBiru = {
  background: "#0d6efd",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "8px",
};

const btnMerah = {
  background: "#dc3545",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default DataPeserta;