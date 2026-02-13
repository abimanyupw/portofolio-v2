import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PortfolioTabs from "./components/PortfolioTabs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PortfolioTabs />
      <Contact />
      <Footer />
    </>
  );
}
