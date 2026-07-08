import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CardFeature from "../components/CardFeature";
import Announcement from "../components/Announcement";
import Chart from "../components/Chart";
import Footer from "../components/Footer";

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

export default Home;