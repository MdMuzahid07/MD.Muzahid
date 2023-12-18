import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import PortfolioSection from "./components/portfolio/PortfolioSection";

const App = () => {
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
