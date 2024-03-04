import { MdMuzahid } from "../../assets";
import { styles } from "../../styles";
import ShadowFont from "../common/ShadowFont";

const textWords = [
  { text: "I", id: "ui1h43", style: "" },
  { text: "help", id: "u243", style: "" },
  { text: "brands", id: "uiad143", style: "" },
  { text: "shine", id: "uiad43", style: "" },
  { text: "in", id: "uij143", style: "" },
  { text: "in", id: "uim143", style: "" },
  { text: "digital", id: "usi143", style: "" },
  { text: "age.", id: "ui14ty3", style: "" },
  { text: "Together,", id: "ui1343", style: "" },
  { text: "we", id: "ui1usdfr43", style: "" },
  { text: "redefine", id: "uisf143", style: "" },
  { text: "the", id: "ui1423", style: "" },
  { text: "norm.", id: "u5i143", style: "" },
  { text: "No", id: "ui1473", style: "" },
  { text: "fluff,", id: "uibv143", style: "" },
  { text: "only", id: "ui1ghn43", style: "" },
  { text: "the", id: "ui1dn43", style: "" },
  { text: "best.", id: "uidn43", style: "" },
  { text: "I", id: "udfgi143", style: "" },
  { text: "use", id: "urtyui143", style: "" },
  { text: "modern", id: "ui1s43", style: "" },
  { text: "technologies", id: "udhi143", style: "" },
  { text: "like", id: "ui143jk", style: "" },
  {
    text: "MERN-Stack",
    id: "ui14dgfh3",
    style:
      "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
  },
  { text: "and", id: "ui14b3", style: "" },
  {
    text: "NextJS",
    id: "ui142543",
    style:
      "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
  },
  { text: "for", id: "ui135643", style: "" },
  {
    text: "full-stack web development.",
    id: "ui14hj3",
    style:
      "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
  },
  { text: "I", id: "uin143", style: "" },
  { text: "also", id: "ui1v2543", style: "" },
  { text: "have", id: "ujeri143", style: "" },
  { text: "good", id: "ui62143", style: "" },
  { text: "knowledge", id: "ui1uioy43", style: "" },
  { text: "of", id: "ui14fj53", style: "" },
  { text: "mobile", id: "uisgf143", style: "" },
  { text: "app", id: "ui1sdgk43", style: "" },
  { text: "development", id: "ui1sg43", style: "" },
  { text: "using", id: "ui14wrt3", style: "" },
  { text: "React", id: "ui145443", style: "" },
  { text: "Native.", id: "uiw143", style: "" },
];

const aboutStyles = {
  btn: "px-4 py-1.5 text-xs md:text-md lg:text-xl bg-black rounded-full font-bold border px-4 py-1.5 text-xs md:text-md lg:text-xl bg-black rounded-md md:rounded-xl font-bold border",
};

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} bg-primary min-h-screen w-full`}
    >
      <section className="max-w-screen-2xl mx-auto text-white">
        <ShadowFont>About Me</ShadowFont>
        <div className="flex flex-col sm:flex-row max-md:items-center gap-4 lg:gap-10 mt-10 md:mt-10">
          <figure className="max-w-[200px] min-w-[200px] max-h-[200px]">
            <img
              className="w-full h-full object-cover object-center rounded-full opacity-50"
              src={MdMuzahid}
              alt=""
            />
          </figure>
          <div className="mt-5 md:mt-0">
            <h1 className="text-[14px] md:text-[20px] lg:text-[35px] xl:text-[45px] font-extrabold">
              {textWords.map(({ text, id, style }) => (
                <span key={id} className={style}>
                  {text}{" "}
                </span>
              ))}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="mailto:mdmuzahid.dev@gmail.com"
                className={aboutStyles.btn}
              >
                Email
              </a>
              <a href="https://drive.google.com/u/1/uc?id=12EpiQnRgBc3_HTRQZB5pbQa7dpHSgmRQ&export=download">
                <button className={aboutStyles.btn}>Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
