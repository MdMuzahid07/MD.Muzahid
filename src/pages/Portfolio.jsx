import { HR } from "../components/common/HR";
import Footer from "../components/footer/Footer";
import ProjectCard from "../components/portfolio/ProjectCard";
import { styles } from "../styles";
import Preloader from "../components/preloader/Preloader";
import { Helmet } from "react-helmet-async";
import { useGetAllProjectsQuery } from "../redux/features/project/projectApi";
import toast from "react-hot-toast";

const Portfolio = () => {
  const { data, error, isLoading } = useGetAllProjectsQuery("");

  if (error) {
    toast.error(error?.message);
  }

  if (isLoading) {
    return <Preloader />;
  }

  const projects = data?.data || [];

  return (
    <>
      <Helmet>
        <title>MD.MUZAHID | Projects</title>
        <meta
          name="description"
          content="Hi. Im Md.Muzahid, an Web Application Developer, Works with full stack development using MERN-Stack, and This is my portfolio website"
        />
        <meta name="robots" content="index, follow" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Md.Muzahid" />
      </Helmet>
      <section
        id="portfolio"
        className={`${styles.paddingY} w-full  min-h-screen stripeBG overflow-x-hidden`}
      >
        <div className={`${styles.paddingX}  text-slate-300  relative`}>
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
