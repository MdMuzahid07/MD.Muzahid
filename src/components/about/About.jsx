import { styles } from "../../styles";
import ShadowFont from "../common/ShadowFont";
import { skills } from "../../constants/index";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const textWords = [
  { text: "I", id: "ui1h43", style: "" },
  { text: "help", id: "u243", style: "" },
  { text: "brands", id: "uiad143", style: "" },
  { text: "shine", id: "uiad43", style: "" },
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
  btn: "px-4 py-1.5 text-xs md:text-md lg:text-xl bg-black hover:bg-black rounded-full font-bold border px-4 py-1.5 text-xs md:text-md lg:text-xl bg-black rounded-full font-bold border-2 border-slate-600 bg-black",
};

const About = () => {
  const [profileImg, setProfileImg] = useState(" ");

  useEffect(() => {
    axios
      .get("https://md-muzahid-server.vercel.app/api/v1/profile-img")
      .then((response) => {
        setProfileImg(response?.data?.data[0]?.Img);
      })
      .catch((error) =>
        toast.error(error.message, { id: "profile img fetch error" })
      );
  }, []);

  return (
    <section
      id="about"
      className={`${styles.paddingX} ${styles.paddingY} stripeBG min-h-screen w-full`}
    >
      <section className="max-w-screen-2xl mx-auto text-slate-300">
        <ShadowFont>About Me</ShadowFont>
        <div className="flex flex-col sm:flex-row max-md:items-center gap-4 lg:gap-10 mt-10 md:mt-10">
          <figure className="max-w-[200px] min-w-[200px] max-h-[200px] overflow-hidden">
            <img
              className="w-full h-full object-cover object-center rounded-full opacity-70 hover:opacity-100"
              src={profileImg}
              alt=""
            />
          </figure>
          <div className="mt-5 md:mt-0">
            <section>
              <h1 className="text-[14px] md:text-[20px] lg:text-[35px] xl:text-[45px] font-extrabold text-slate-300">
                {textWords.map(({ text, id, style }) => (
                  <span key={id} className={style}>
                    {text}{" "}
                  </span>
                ))}
              </h1>
              <div className="flex items-center gap-4 mt-4 relative">
                <span className="absolute -left-24 -top-16 hidden lg:block">
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
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:mdmuzahid.dev@gmail.com"
                  className={aboutStyles.btn}
                >
                  Email Me
                </a>
                <a href="https://drive.google.com/u/1/uc?id=12EpiQnRgBc3_HTRQZB5pbQa7dpHSgmRQ&export=download">
                  <button className={aboutStyles.btn}>Download Resume</button>
                </a>
              </div>
            </section>
            <section className="mt-7 sm:mt-10 lg:mt-14">
              <p className="text-slate-300">Skills</p>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                {skills?.map(({ name, icon, id }) => (
                  <section
                    className=" flex items-center gap-2 pl-2 pr-3 py-2 h-14 bg-black rounded-full border border-slate-800"
                    key={id}
                  >
                    <div className="w-10 h-10  hover:shadow-white hover:rotate-[360deg] transition-transform ease-in-out rounded-full p-1 duration-1000 bg-white overflow-hidden hover:scale-[1.1]">
                      <img className="w-8" src={icon} alt={name} />
                    </div>
                    <h3>{name}</h3>
                  </section>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
