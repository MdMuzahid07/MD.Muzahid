import { styles } from "../../styles";
import { HR } from "../common/HR";
import ProjectCard from "./ProjectCard";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full  min-h-screen bg-primary">
      <div className={`${styles.paddingX}  text-white`}>
        <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mb-20" />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default PortfolioSection;
