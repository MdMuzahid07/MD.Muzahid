import { HR } from "../components/common/HR";
import Footer from "../components/footer/Footer";
import ProjectCard from "../components/portfolio/ProjectCard";
import { styles } from "../styles";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className={`${styles.paddingY} w-full  min-h-screen bg-primary`}
      >
        <div className={`${styles.paddingX}  text-white  relative`}>
          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mb-20" />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <hr />
      <Footer />
    </>
  );
};

export default Portfolio;
