import { motion } from "framer-motion";

const slideUp = {
  initial: {
    y: "0",
  },
  enter: {
    y: "-100vh",
    transition: { duration: 0.9, ease: [0.75, 0, 0.24, 1], delay: 0.5 },
  },
};

const Preloader = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      enter="enter"
      exit="enter"
      className="w-full min-h-screen flex-col fixed top-0 left-0 z-50 bg-primary flex justify-center items-center"
    >
      <h1 className="text-white text-[40px]">Thinking...</h1>
      {/* <button
        className="w-44 h-14 mt-4 text-[20px] font-bold rounded-full border text-white flex justify-center items-center"
        onClick={() => setIsLoading(false)}
      >
        START
      </button> */}
    </motion.div>
  );
};

export default Preloader;
