import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <header>
          <Navbar />
          <Hero />
        </header>

        <Intro />

        <div
          id="about"
          className="min-h-screen bg-red-500  text-white text-[20px] font-extrabold"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          incidunt nostrum rem beatae eaque ad deserunt praesentium? Architecto
          quos cupiditate pariatur placeat obcaecati, est nam modi iste alias
          unde qui sapiente enim at, facilis vel et suscipit error numquam
          aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quia incidunt nostrum rem beatae eaque ad deserunt praesentium?
          Architecto quos cupiditate pariatur placeat obcaecati, est nam modi
          iste alias unde qui sapiente enim at, facilis vel et suscipit error
          numquam aliquam.
        </div>

        <div
          id="portfolio"
          className="min-h-screen bg-yellow-500 flex items-center justify-center text-white text-[20px] font-extrabold tracking-widest"
        >
          <h1>PORTFOLIO</h1>
        </div>

        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
