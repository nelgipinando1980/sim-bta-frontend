// 1. SEMUA IMPORT HARUS BERADA DI PALING ATAS FILE
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CardFeature from "./components/CardFeature";
import Announcement from "./components/Announcement";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import Informasi from "./pages/informasi"; // Sudah dipindah ke atas dengan aman

import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import Jadwal from "./admin/Jadwal";
import Register from "./pages/Register";

// 2. BARU MASUK KE DEFINISI FUNGSI/KOMPONEN
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <CardFeature />
      <Announcement />
      <Chart />
      <Footer />
    </>
  );
}

// Jika ingin halaman /Informasi terlihat rapi dengan Navbar dan Footer, 
// kamu bisa bungkus seperti ini (opsional, tapi sangat disarankan agar tidak polos):
function HalamanInformasi() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, background: "#fafafa" }}>
        <Informasi />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/jadwal" element={<Jadwal />} />
        <Route path="/register" element={<Register />} />
        
        {/* Menggunakan HalamanInformasi agar layout tetap konsisten ada Navbar/Footer */}
        <Route path="/Informasi" element={<HalamanInformasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;