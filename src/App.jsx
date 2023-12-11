import Hero from "./components/hero/Hero";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Lenis from "@studio-freight/lenis";
import PortfolioSection from "./components/portfolio/PortfolioSection";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    // console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.addEventListener("scroll", lenis);

    return () => {
      window.removeEventListener("scroll", lenis);
    };
  }, []);

  return (
    <main className="relative z-0 bg-primary">
      <header>
        <Hero />
      </header>

      <About />

      <PortfolioSection />

      <Contact />
      <Footer />
    </main>
  );
};

export default App;
