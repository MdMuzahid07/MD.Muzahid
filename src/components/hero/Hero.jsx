import { styles } from "../../styles";
import heroStyles from "./heroStyles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className={`${styles.paddingX} bg-primary min-h-screen w-full flex-col flex items-center justify-center text-white relative`}
    >
      <motion.h1
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5, ease: [0.75, 0, 0.24, 1] }}
        className={heroStyles.headingBold}
      >
        HI, {`I'M`}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          MD.MUZAHID
        </span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.3, ease: [0.5, 0, 0.75, 0] }}
        className={heroStyles.headingNormal}
      >
        I DEVELOP WEB WORLD, AND REACT NATIVE{" "}
        <br className="hidden 3xl:block" /> APPLICATION
        {/* hire me button start  */}
        <div className="text-[18px] mt-10 block xs:hidden">
          <a
            href="#contact"
            type="button"
            className="transition ease-in-out delay-50 w-56  h-10 bg-gradient-to-r hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-lg active:scale-75 hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-lg p-1"
          >
            <div className="bg-black rounded-md w-full h-full flex items-center justify-center">
              <p>HIRE ME</p>
            </div>
          </a>
        </div>
        {/* hire me button start  */}
      </motion.h1>

      <motion.a
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 1.9,
          ease: [0.75, 0, 0.24, 1],
        }}
        type="button"
        href="#about"
        className="hidden  text-white h-24 w-24 border xl:flex justify-center items-center rounded-full  absolute bottom-[10vh] right-[20vw] hover:bg-black"
      >
        {" "}
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
            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default Hero;
