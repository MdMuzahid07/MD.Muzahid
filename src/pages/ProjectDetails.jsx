import { useEffect, useRef } from "react";
import Footer from "../components/footer/Footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectsData } from "../features/projects/projectSlice";
import { imageLoadingShadow } from "../assets";
import { Helmet } from "react-helmet-async";

const styles = {
  headingTextBold:
    "text-[70px] md:text-[90px] xl:text-[100px] 3xl:text-[120px] font-bold",
  headingText:
    "text-[20px] xs:text-[30px] md:text-[40px] lg:text-[50px] 3xl:text-[60px] font-bold",
};

const ProjectDetails = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);

  const { projectId } = useParams();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const project = projects?.find((project) => project._id === projectId);

  const nextProject = projects
    ?.filter((project) => project._id !== projectId)
    .slice(0, 1);

  // console.log(nextProject[0]?._id, "next project id");

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, isInView1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, isInView2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [controls3, isInView3]);

  useEffect(() => {
    if (isInView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [controls4, isInView4]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

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
        <div className={`max-w-screen-2xl mx-auto text-white`}>
          {/* header start  */}
          <motion.h1
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={{
              hidden: { opacity: 0, y: "50px" },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              ease: [0.75, 0, 0.24, 1],
            }}
            className={styles.headingTextBold}
          >
            {project?.name}
          </motion.h1>
          <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-24 mt-16 mb-28">
            <div>
              <ul className="flex items-center text-[18px] gap-5 flex-wrap">
                <li>
                  <h1>Technologies :</h1>
                </li>
                {project?.usedTechnologies?.map((tech, index) => {
                  return <li key={tech + (index * 2) / 10}>{tech}</li>;
                })}
              </ul>
              <div className="flex items-center flex-wrap gap-6 mt-5">
                <h1 className="text-[18px]">Source Code :</h1>
                <a
                  href={project?.source?.client}
                  target="_blank"
                  rel="noreferrer"
                  className="w-44 hover:bg-black text-[18px] h-10 border rounded-full flex items-center justify-center"
                >
                  Front-end
                </a>
                <a
                  href={project?.source?.server}
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
                href={project?.live_url}
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
                <span className="text-[22px]"> {project?.projectYear}</span>
              </li>
            </ul>
          </div>
          {/* header end */}

          <section className="mb-32 w-full">
            <figure className="w-full h-auto">
              <img
                className="w-full h-full object-cover object-center"
                src={
                  project?.thumbnailImg
                    ? project?.thumbnailImg
                    : imageLoadingShadow
                }
                alt=""
              />
            </figure>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>
                  {project?.feature_1?.heading}:
                </h1>
                <p className="text-[20px]">{project?.feature_1?.detail}</p>
              </div>
              <div className=" flex justify-end">
                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={controls2}
                  variants={{
                    hidden: { opacity: 0, y: "50px" },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3,
                    ease: [0.5, 1, 0.89, 1],
                  }}
                  className="max-w-7xl mt-10 md:mt-24"
                >
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={project?.feature_1?.image}
                      alt="project_screenshot"
                    />
                  </figure>
                </motion.div>
              </div>
            </div>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>
                  {project?.feature_2?.heading}:
                </h1>
                <p className="text-[20px]">{project?.feature_2?.detail}</p>
              </div>
              <div className="">
                <motion.div
                  ref={ref3}
                  initial="hidden"
                  animate={controls3}
                  variants={{
                    hidden: { opacity: 0, y: "50px" },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3,
                    ease: [0.5, 1, 0.89, 1],
                  }}
                  className="max-w-7xl mt-10 md:mt-24"
                >
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={project?.feature_2?.image}
                      alt="project_screenshot"
                    />
                  </figure>
                </motion.div>
              </div>
            </div>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>
                  {project?.feature_3?.heading}:
                </h1>
                <p className="text-[20px]">{project?.feature_3?.detail}</p>
              </div>
              <div className="flex justify-end">
                <motion.div
                  ref={ref4}
                  initial="hidden"
                  animate={controls4}
                  variants={{
                    hidden: { opacity: 0, y: "50px" },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3,
                    ease: [0.5, 1, 0.89, 1],
                  }}
                  className="max-w-7xl mt-10 md:mt-24"
                >
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={project?.feature_3?.image}
                      alt="project_screenshot"
                    />
                  </figure>
                </motion.div>
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
            className="max-w-screen-2xl mx-auto w-full h-full"
          >
            <div className="w-full h-full sm:p-16 p-6 flex justify-center flex-col items-center bg-primary opacity-75">
              <h1 className={`${styles.headingTextBold} uppercase text-white`}>
                {nextProject[0]?.name}
              </h1>
              <Link
                to={`/projectDetails/${nextProject[0]?._id}`}
                className="w-56 mt-20 flex items-center cursor-pointer justify-center text-[20px] md:text-[25px] font-bold rounded-xl h-16 border border-white relative text-white"
              >
                Next Project{" "}
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
