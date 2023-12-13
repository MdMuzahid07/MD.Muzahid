import { useEffect, useRef } from "react";
import Footer from "../components/footer/Footer";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectDetails = () => {
  const ref = useRef();
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const usedTechs = [
    { label: "ReactJS", href: "", color: "", id: "143" },
    { label: "NextJS", href: "", color: "", id: "14253" },
    { label: "ExpressJS", href: "", color: "", id: "1453" },
    { label: "NodeJS", href: "", color: "", id: "142553" },
    { label: "MongoDB", href: "", color: "", id: "16553" },
    { label: "Mongoose", href: "", color: "", id: "17453" },
    { label: "Tailwind CSS", href: "", color: "", id: "14143" },
  ];

  const styles = {
    headingTextBold:
      "text-[30px] xs:text-[50px] md:text-[70px] lg:text-[90] xl:text-[100px] 3xl:text-[120px] font-bold",
    headingText:
      "text-[20px] xs:text-[30px] md:text-[40px] lg:text-[50px] 3xl:text-[60px] font-bold",
  };

  return (
    <div>
      <div
        className={`sm:px-16 px-6 md:py-24  sm:py-16 py-24 min-h-screen bg-primary w-full`}
      >
        <div className={`max-w-screen-2xl mx-auto text-white`}>
          {/* header start  */}
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
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
            PROJECT NAME PROJECT NAME
          </motion.h1>
          <div className="flex justify-between items-start flex-wrap gap-24 mt-16 mb-28">
            <div>
              <ul className="flex items-center text-[18px] gap-5 flex-wrap">
                <li>
                  <h1>Technologies :</h1>
                </li>
                {usedTechs.map(({ label, href, id }) => {
                  return (
                    <li key={id}>
                      <a href={href}>{label}</a>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center flex-wrap gap-6 mt-5">
                <h1 className="text-[18px]">Source Code :</h1>
                <a
                  className="w-44 hover:bg-black text-[18px] h-10 border rounded-full flex items-center justify-center"
                  href=""
                >
                  Front-end
                </a>
                <a
                  className="w-44 hover:bg-black text-[18px] h-10 border rounded-full flex items-center justify-center"
                  href=""
                >
                  Server
                </a>
              </div>
            </div>
            <ul className="flex items-center flex-wrap gap-4 md:gap-14">
              <li className="w-56 flex items-center cursor-pointer justify-center text-[20px] font-bold rounded-full h-10 border border-white relative hover:bg-black">
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
              </li>
              <li className="text-[20px]">
                Year <span className="text-[22px]"> 2023</span>
              </li>
            </ul>
          </div>
          {/* header end */}

          <section className="mb-32 w-full">
            <figure className="w-full h-auto">
              <img
                className="w-full h-full object-cover object-center"
                src="https://i.ibb.co/0jf0RsN/weather-App-Landing-Page.png"
                alt=""
              />
            </figure>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>Clean and Modern Design:</h1>
                <p className="text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus rerum impedit itaque dolores unde quo sequi earum
                  velit in officiis ab quos minus, delectus tenetur numquam,
                  voluptate enim sit repellendus!
                </p>
              </div>
              <div className=" flex justify-end">
                <div className="max-w-7xl mt-10 md:mt-24">
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://i.ibb.co/0jf0RsN/weather-App-Landing-Page.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>Clean and Modern Design:</h1>
                <p className="text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus rerum impedit itaque dolores unde quo sequi earum
                  velit in officiis ab quos minus, delectus tenetur numquam,
                  voluptate enim sit repellendus!
                </p>
              </div>
              <div className="">
                <div className="max-w-7xl mt-10 md:mt-24">
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://i.ibb.co/0jf0RsN/weather-App-Landing-Page.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="mt-32">
              <div>
                <h1 className={styles.headingText}>Clean and Modern Design:</h1>
                <p className="text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus rerum impedit itaque dolores unde quo sequi earum
                  velit in officiis ab quos minus, delectus tenetur numquam,
                  voluptate enim sit repellendus!
                </p>
              </div>
              <div className="flex justify-end">
                <div className="max-w-7xl mt-10 md:mt-24">
                  <figure className="w-full h-auto">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://i.ibb.co/0jf0RsN/weather-App-Landing-Page.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
