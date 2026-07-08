import Sidebar from "../components/Sidebar";

function Pengaturan() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Pengaturan</h1>
      </div>
    </div>
  );
}

export default Pengaturan;