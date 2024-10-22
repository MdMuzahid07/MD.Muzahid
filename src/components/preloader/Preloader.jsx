// import { motion } from "framer-motion";

// const slideUp = {
//   initial: {
//     y: "0",
//   },
//   enter: {
//     y: "-100vh",
//     transition: { duration: 0.9, ease: [0.75, 0, 0.24, 1], delay: 0.5 },
//   },
// };

// const Preloader = () => {
//   return (
//     <motion.div
//       variants={slideUp}
//       initial="initial"
//       enter="enter"
//       exit="enter"
//       className="w-full min-h-screen flex-col fixed top-0 left-0 z-50 bg-primary flex justify-center items-center"
//     >
//       <h1 className="text-slate-300 text-[40px] flex items-center gap-4">
//         <span>Welcome to my portfolio</span>
//       </h1>
//     </motion.div>
//   );
// };

// export default Preloader;

import { motion } from "framer-motion";

const slideUp = {
  initial: {
    y: "100vh", // Initially offscreen (bottom)
  },
  enter: {
    y: "0", // Slides into view
    transition: { duration: 0.9, ease: [0.75, 0, 0.24, 1], delay: 0.2 },
  },
  exit: {
    y: "-100vh", // Exits upwards
    transition: { duration: 0.9, ease: [0.75, 0, 0.24, 1], delay: 0.5 },
  },
};

const textFade = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1.2, delay: 1.0 } },
};

const Preloader = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-full min-h-screen flex-col fixed top-0 left-0 z-50 bg-gradient-to-r from-primary via-purple-950 to-primary flex justify-center items-center bg-opacity-45 backdrop-blur-sm"
    >
      <motion.h1
        variants={textFade}
        className="text-white text-[36px] md:text-[40px] lg:text-[48px] flex items-center gap-4"
      >
        <span className="font-bold">Welcome to My Portfolio</span>
      </motion.h1>

      <motion.p
        variants={textFade}
        className="text-white text-opacity-70 text-xl mt-4 animate-pulse"
      >
        Discover my work. Loading...
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
