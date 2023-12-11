import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { HR } from "../common/HR";
import ProjectCard from "./ProjectCard";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full  min-h-screen bg-primary">
      <div className={`${styles.paddingX}  text-white  relative`}>
        <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mb-20" />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        <Link
          to="/projects"
          type="button"
          className=" transition ease-in-out delay-50 absolute  bottom-[50vh] xs:bottom-[60vh] sm:bottom-[70vh] md:bottom-36 right-[10vw] md:left-[45vw] text-white h-24 w-24 border flex justify-center items-center rounded-full   hover:bg-black"
        >
          {" "}
          VIEW All
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
