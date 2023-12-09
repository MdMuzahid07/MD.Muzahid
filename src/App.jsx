import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    document.body.style.cursor = "default";
    // }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader setIsLoading={setIsLoading} />}
        </AnimatePresence>
        <header>
          <Navbar />
          <Hero />
        </header>

        <Intro />

        <div
          id="about"
          className="min-h-screen bg-red-500 flex items-center justify-center text-white text-[20px] font-extrabold"
        ></div>

        <div
          id="portfolio"
          className="min-h-screen bg-yellow-500 flex items-center justify-center text-white text-[20px] font-extrabold tracking-widest"
        >
          <h1>PORTFOLIO</h1>
        </div>

        <div
          id="contact"
          className="min-h-screen bg-indigo-500 flex items-center justify-center text-white text-[20px] font-extrabold tracking-widest"
        >
          <h1>CONTACT</h1>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
