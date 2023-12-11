import { styles } from "../../styles";

const bg = {
  clipText:
    "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
};

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} bg-primary min-h-screen w-full`}
    >
      <div className="max-w-7xl mx-auto text-white">
        <h1 className="text-[30px] xs:text-[50px] md:text-[60px] lg:text-[70px] font-extrabold">
          I help brands shine in the digital age. Together, we redefine the
          norm. No fluff, only the best. I use modern technologies like
          <span className={bg.clipText}> MERN-Stack</span> and{" "}
          <span className={bg.clipText}> NextJS</span> for{" "}
          <span className={bg.clipText}> full-stack web development</span>. I
          also have good knowledge of mobile app development using React Native.
        </h1>
      </div>
    </section>
  );
};

export default About;
