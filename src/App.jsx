import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <main className="relative z-0 bg-primary overflow-x-hidden">
      <Helmet>
        <title>MD.MUZAHID | Home</title>
        <meta
          name="description"
          content="Hi. Im Md.Muzahid, an Web Application Developer, Works with full stack development using MERN-Stack, and This is my portfolio website"
        />
        <meta name="robots" content="index, follow" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Md.Muzahid" />
      </Helmet>
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
