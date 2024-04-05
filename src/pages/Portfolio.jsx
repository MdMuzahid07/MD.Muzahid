import { useEffect } from "react";
import { HR } from "../components/common/HR";
import Footer from "../components/footer/Footer";
import ProjectCard from "../components/portfolio/ProjectCard";
import { styles } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjectsData } from "../features/projects/projectSlice";
import Preloader from "../components/preloader/Preloader";

const Portfolio = () => {
  const { projects, isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projects]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <section
        id="portfolio"
        className={`${styles.paddingY} w-full  min-h-screen stripeBG overflow-x-hidden`}
      >
        <div className={`${styles.paddingX}  text-white  relative`}>
          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mb-20" />
          {projects?.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>
      </section>
      <hr />
      <Footer />
    </>
  );
};

export default Portfolio;
