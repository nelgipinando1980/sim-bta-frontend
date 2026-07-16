import Sidebar from "../components/Sidebar";

function Laporan() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Laporan BTA</h1>

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
            <tr>
              <td>1</td>
              <td>231001</td>
              <td>Ahmad Fauzi</td>
              <td>90</td>
              <td>Lulus</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Laporan;