import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CardFeature from "./components/CardFeature";
import Announcement from "./components/Announcement";
import Chart from "./components/Chart";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import Jadwal from "./admin/Jadwal";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/jadwal" element={<Jadwal />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;