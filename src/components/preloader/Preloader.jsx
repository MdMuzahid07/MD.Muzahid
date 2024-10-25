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
      <h1 className="text-white text-center font-bold text-2xl sm:text-[40px] flex items-center gap-4">
        <span>Welcome to my portfolio</span>
      </h1>
      <div className="mt-7 text-white flex items-center text-center gap-3">
        Loading ...
        <svg
          className="animate-spin h-5 w-5 mr-3 border rounded"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </motion.div>
  );
};

export default Preloader;
