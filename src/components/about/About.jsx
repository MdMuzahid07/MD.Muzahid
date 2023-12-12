import { styles } from "../../styles";

const bg = {
  clipText:
    "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
};

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} bg-primary min-h-screen w-full bg-[url('https://img.freepik.com/free-photo/confident-young-woman-elegant-fashion-portrait-generated-by-ai_188544-23856.jpg?t=st=1702365353~exp=1702368953~hmac=f7451a5c9e27ba6c9d7fe0f6cf67ad388cdadebeee833e5bb9b4725a2c078709&w=1380')] bg-no-repeat bg-center bg-cover  `}
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
