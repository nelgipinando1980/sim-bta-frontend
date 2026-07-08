import Sidebar from "../components/Sidebar";

function Laporan() {
  const role = localStorage.getItem("role");

  const data = [
    {
      nim: "231001",
      nama: "Ahmad Fauzi",
      nilai: 90,
      status: "Lulus",
    },
    {
      nim: "231002",
      nama: "Budi Santoso",
      nilai: 80,
      status: "Lulus",
    },
    {
      nim: "231003",
      nama: "Siti Aisyah",
      nilai: 65,
      status: "Belum Lulus",
    },
  ];

  const downloadExcel = () => {
    let csv =
      "NIM,Nama,Nilai,Status\n";

    data.forEach((item) => {
      csv += `${item.nim},${item.nama},${item.nilai},${item.status}\n`;
    });

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Laporan_BTA.csv";

    link.click();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h2>Laporan Nilai BTA</h2>

        {role === "pimpinan" && (
          <button
            onClick={downloadExcel}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Download Excel
          </button>
        )}

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
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item.nim}>
                <td>{index + 1}</td>
                <td>{item.nim}</td>
                <td>{item.nama}</td>
                <td>{item.nilai}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Laporan;