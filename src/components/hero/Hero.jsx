import { useEffect, useRef } from "react";
import { styles } from "../../styles";
import heroStyles from "./heroStyles";
import { motion, useAnimation, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadingTitleData } from "../../features/settings/settingSlice";

const Hero = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const dispatch = useDispatch();
  const { title } = useSelector((state) => state?.settings);

  useEffect(() => {
    dispatch(fetchHeadingTitleData());
  }, [dispatch]);

  const titleText = title[0]?.title;

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

  return (
    <div
      id="home"
      className={`${styles.paddingX} heroBG bg-primary min-h-screen w-full flex-col flex items-center justify-center text-slate-300 relative`}
    >
      <motion.h1
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={{
          hidden: { opacity: 0, y: "50px" },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.75, delay: 0.5, ease: [0.75, 0, 0.24, 1] }}
        className={heroStyles.headingBold}
      >
        HI, {`I'M`}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          MD.MUZAHID
        </span>
      </motion.h1>
      <motion.h1
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.75, delay: 0.9, ease: [0.5, 0, 0.75, 0] }}
        className={heroStyles.headingNormal}
      >
        <span className="uppercase">
          {titleText ? (
            titleText
          ) : (
            <>
              I DEVELOP WEB WORLD, AND REACT NATIVE
              <br className="hidden 3xl:block" /> APPLICATION
            </>
          )}
        </span>
        {/* */}
        {/* hire me button start  */}
        <div className="text-[18px] mt-10 block xs:hidden">
          <a
            href="#contact"
            type="button"
            className="transition ease-in-out delay-50 w-56  h-10 bg-gradient-to-r hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-lg active:scale-75 hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-slate-300 rounded-full p-1"
          >
            <div className="bg-black rounded-full w-full h-full flex items-center justify-center">
              <p>HIRE ME</p>
            </div>
          </a>
        </div>
        {/* hire me button start  */}
      </motion.h1>

      <motion.a
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { opacity: 0, y: "50px" },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.75,
          delay: 1.7,
        }}
        type="button"
        href="#about"
        className="hidden text-slate-300 h-24 w-24 border xl:flex justify-center items-center rounded-full  absolute bottom-[10vh] right-[20vw] hover:bg-black"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default Hero;
