import Hero from "./components/hero/Hero";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Lenis from "@studio-freight/lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

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
    <div className="relative z-0 bg-primary">
      <header>
        <Hero />
      </header>

      <About />

      <div
        id="portfolio"
        className="min-h-screen bg-yellow-500 flex items-center justify-center text-white text-[20px] font-extrabold tracking-widest"
      >
        <h1>PORTFOLIO</h1>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
