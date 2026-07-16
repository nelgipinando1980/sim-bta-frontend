import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CardFeature from "./components/CardFeature";
import Announcement from "./components/Announcement";
import Chart from "./components/Chart";
import Footer from "./components/Footer";

// PAGES
import Login from "./pages/Login";
import Register from "./pages/Register";
import Informasi from "./pages/Informasi";
import Kontak from "./pages/Bantuan";

// ================= ADMIN =================
import AdminDashboard from "./admin/Dashboard";
import DataPeserta from "./admin/DataPeserta";
import Jadwal from "./admin/Jadwal";
import Verifikasi from "./admin/Verifikasi";
import DataPengajar from "./admin/DataPengajar";
import Pengumuman from "./admin/Pengumuman";

// ================= PENGAJAR =================
import PengajarDashboard from "./pengajar/Dashboard";
import InputNilai from "./pengajar/InputNilai";
import UpdateNilai from "./pengajar/UpdateNilai";
import HapusNilai from "./pengajar/HapusNilai";
// Import komponen baru khusus pengajar
import DataPesertaPengajar from "./pengajar/DataPesertaPengajar"; 

// ================= PIMPINAN =================
import PimpinanDashboard from "./pimpinan/Dashboard";
import Laporan from "./pimpinan/Laporan";
import DownloadLaporan from "./pimpinan/DownloadLaporan";

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

function HalamanInformasi() {
  return (
    <>
      <Navbar />
      <Informasi />
      <Footer />
    </>
  );
}

function HalamanBantuan() {
  return (
    <>
      <Navbar />
      <Kontak />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/informasi" element={<HalamanInformasi />} />
        <Route path="/bantuan" element={<HalamanBantuan />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/peserta" element={<DataPeserta />} />
        <Route path="/admin/verifikasi" element={<Verifikasi />} />
        <Route path="/admin/jadwal" element={<Jadwal />} />
        <Route path="/admin/pengajar" element={<DataPengajar />} />
        <Route path="/admin/pengumuman" element={<Pengumuman />} />

        {/* PENGAJAR */}
        <Route path="/pengajar" element={<PengajarDashboard />} />
        <Route path="/pengajar/input-nilai" element={<InputNilai />} />
        <Route path="/pengajar/update-nilai" element={<UpdateNilai />} />
        <Route path="/pengajar/hapus-nilai" element={<HapusNilai />} />
        {/* Rute baru untuk tampilan khusus pengajar */}
        <Route path="/pengajar/data-peserta" element={<DataPesertaPengajar />} />

        {/* PIMPINAN */}
        <Route path="/pimpinan" element={<PimpinanDashboard />} />
        <Route path="/pimpinan/laporan" element={<Laporan />} />
        <Route path="/pimpinan/download" element={<DownloadLaporan />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;