import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../../components/preloader/Preloader";
import Lenis from "@studio-freight/lenis";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 1000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, lerp: 0.5 });

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
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
