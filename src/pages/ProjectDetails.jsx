import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import { imageLoadingShadow } from "../assets";
import { Helmet } from "react-helmet-async";
import {
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
} from "../redux/features/project/projectApi";
import toast from "react-hot-toast";
import Spinner from "../components/preloader/Spinner";

const styles = {
  headingTextBold:
    "text-[70px] md:text-[90px] xl:text-[100px] 3xl:text-[120px] font-bold",
  headingText:
    "text-[20px] xs:text-[30px] md:text-[40px] lg:text-[50px] 3xl:text-[60px] font-bold",
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { data: project, error, isLoading } = useGetProjectByIdQuery(projectId);
  const {
    data: projects,
    error: getAllError,
    isLoading: getAllLoading,
  } = useGetAllProjectsQuery();

  const nextProject = projects?.data
    ?.filter((project) => project._id !== projectId)
    .slice(0, 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (error || getAllError) {
    if (error) {
      toast.error(error.message, { id: "8y0a986f09bf" });
    }
    if (getAllError) {
      toast.error(getAllError.message, { id: "8y0aadf986f09bf" });
    }
  }

  if (isLoading || getAllLoading) {
    if (isLoading) {
      return <Spinner />;
    }
    if (getAllLoading) {
      return <Spinner />;
    }
  }

  console.log(project);

  return (
    <>
      <Helmet>
        <title>MD.MUZAHID | Details</title>
        <meta
          name="description"
          content="Hi. Im Md.Muzahid, an Web Application Developer, Works with full stack development using MERN-Stack, and This is my portfolio website"
        />
        <meta name="robots" content="index, follow" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Md.Muzahid" />
      </Helmet>
      <section
        className={`sm:px-16 px-6 md:py-24  sm:py-16 py-24 min-h-screen stripeBG w-full`}
      >
        <div className={`max-w-screen-2xl mx-auto text-slate-300`}>
          {/* header start  */}
          <h1 className={styles.headingTextBold}>{project?.data?.name}</h1>
          <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-24 mt-16 mb-28">
            <div>
              <ul className="flex items-center text-[18px] gap-5 flex-wrap">
                <li>
                  <h1>Technologies :</h1>
                </li>
                {project?.data?.usedTechnologies?.map((tech, index) => {
                  return <li key={tech + (index * 2) / 10}>{tech}</li>;
                })}
              </ul>
              <div className="flex items-center flex-wrap gap-6 mt-5">
                <h1 className="text-[18px]">Source Code :</h1>
                <a
                  href={project?.data?.source?.client}
                  target="_blank"
                  rel="noreferrer"
                  className="w-44 hover:bg-black text-[18px] h-10 border rounded-full flex items-center justify-center"
                >
                  Front-end
                </a>
                <a
                  href={project?.data?.source?.server}
                  target="_blank"
                  rel="noreferrer"
                  className="w-44 hover:bg-black text-[18px] h-10 border rounded-full flex items-center justify-center"
                >
                  Server
                </a>
              </div>
            </div>
            <ul className="flex items-center flex-wrap gap-4 md:gap-14">
              <a
                href={project?.data?.live_url}
                target="_blank"
                rel="noreferrer"
                className="w-56 flex items-center cursor-pointer justify-center text-[20px] font-bold rounded-full h-10 border border-white relative hover:bg-black"
              >
                Live Project{" "}
                <span className="absolute -right-5 -top-10">
                  <svg
                    xmlns="https://i.ibb.co/f0NnPLD/Electro-Shop-Home-Page.png"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </a>
              <li className="text-[20px]">
                Year{" "}
                <span className="text-[22px]">
                  {" "}
                  {project?.data?.projectYear}
                </span>
              </li>
            </ul>
          </div>
          {/* header end */}

          <section className="mb-32 w-full">
            <figure className="w-full h-auto">
              <img
                className="w-full h-full object-cover object-center rounded-2xl"
                src={
                  project?.data?.thumbnailImg
                    ? project?.data?.thumbnailImg
                    : imageLoadingShadow
                }
                alt=""
              />
            </figure>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>
                  {project?.data?.feature_1?.heading}:
                </h1>
                <p className="text-[20px]">
                  {project?.data?.feature_1?.detail}
                </p>
              </div>
              <div className=" flex justify-end">
                <div className="max-w-7xl mt-10 md:mt-24">
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full rounded-2xl object-cover object-center"
                      src={project?.data?.feature_1?.image}
                      alt="project_screenshot"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>
                  {project?.data?.feature_2?.heading}:
                </h1>
                <p className="text-[20px]">
                  {project?.data?.feature_2?.detail}
                </p>
              </div>
              <div className="">
                <div className="max-w-7xl mt-10 md:mt-24">
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full rounded-2xl object-cover object-center"
                      src={project?.data?.feature_2?.image}
                      alt="project_screenshot"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>
                  {project?.data?.feature_3?.heading}:
                </h1>
                <p className="text-[20px]">
                  {project?.data?.feature_3?.detail}
                </p>
              </div>
              <div className="flex justify-end">
                <div className="max-w-7xl mt-10 md:mt-24">
                  <figure className="w-full h-auto">
                    <img
                      className="w-full rounded-2xl h-full object-cover object-center"
                      src={project?.data?.feature_3?.image}
                      alt="project_screenshot"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={`h-[50vh] lg:h-[80vh] w-full`}>
          <div
            style={{
              backgroundImage: `url(
              ${
                nextProject[0]?.thumbnailImg
                  ? nextProject[0]?.thumbnailImg
                  : imageLoadingShadow
              }
            )`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="max-w-screen-2xl mx-auto w-full h-full rounded-2xl"
          >
            <div className="w-full h-full sm:p-16 p-6 flex justify-center flex-col items-center bg-primary opacity-75">
              <h1
                className={`${styles.headingTextBold} uppercase text-slate-300`}
              >
                {nextProject[0]?.name}
              </h1>
              <Link
                to={`/projectDetails/${nextProject[0]?._id}`}
                className="w-72 mt-20 flex items-center cursor-pointer justify-center text-[20px] md:text-[25px] font-bold rounded-full h-20 border border-white relative text-slate-300"
              >
                Next Project{" "}
                <span className="absolute -right-5 -top-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </>
  );
};

export default ProjectDetails;
