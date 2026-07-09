// 1. SEMUA IMPORT HARUS BERADA DI PALING ATAS FILE
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CardFeature from "./components/CardFeature";
import Announcement from "./components/Announcement";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import Informasi from "./pages/Informasi"; // Menyesuaikan nama file asli Informasi.jsx

import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import Jadwal from "./admin/Jadwal";
import Register from "./pages/Register";
import Kontak from "./pages/bantuan"; // Memperbaiki rute import ke bantuan.jsx dengan benar

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

// Wrapper Layout Halaman Informasi agar konsisten ada Navbar/Footer
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

// 🌟 PERBAIKAN: Membuat fungsi HalamanBantuan yang sebelumnya hilang
function HalamanBantuan() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, background: "#fafafa" }}>
        <Kontak /> {/* Memanggil komponen Kontak dari file bantuan.jsx */}
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
        
        {/* 🌟 SEKARANG SUDAH AMAN DAN BISA DIAKSES */}
        <Route path="/bantuan" element={<HalamanBantuan />} />
        <Route path="/informasi" element={<HalamanInformasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;