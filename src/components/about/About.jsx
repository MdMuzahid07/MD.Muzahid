/* eslint-disable react/prop-types */
import { styles } from "../../styles";
import ShadowFont from "../common/ShadowFont";
import { skills } from "../../constants/index";

const aboutStyles = {
  btn: "px-4 py-1.5 text-xs md:text-md lg:text-xl bg-black hover:bg-black rounded-full font-bold border px-4 py-1.5 text-xs md:text-md lg:text-xl bg-black rounded-full font-bold border-2 border-slate-600 bg-black",
};

const About = ({ profile }) => {
  const profileInfo = profile?.data?.[0];

  const applyHighlight = (content) => {
    const keywords = {
      "MERN-Stack":
        "bg-clip-text text-transparent bg-gradient-to-r from-pink-500",
      "React Native":
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500",
      "full-stack web development":
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500",
    };

    const regex = new RegExp(`(${Object.keys(keywords).join("|")})`, "gi");

    return content.split(regex).map((part, i) => {
      if (keywords[part]) {
        return (
          <span key={i} className={keywords[part]}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

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
              className="w-full h-full object-cover object-center rounded-full border-4 border-secondary hover:shadow-xl shadow-secondary brightness-75 hover:brightness-100 transition duration-500"
              src={profileInfo?.profileImage}
              alt="Profile"
            />
          </figure>
          <div className="mt-5 md:mt-0">
            <section>
              {/* <h1 className="text-[14px] md:text-[20px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px] font-extrabold  bg-clip-text text-transparent bg-gradient-to-tl from-violet-700 from-30% via-purple-700 via-20% to-slate-300 to-75%">
                {profileInfo?.aboutMe}
              </h1> */}

              <h1 className="text-[14px] md:text-[20px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px] text-slate-300 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-neutral-200 to-slate-300">
                {profileInfo?.aboutMe
                  ? applyHighlight(profileInfo?.aboutMe)
                  : "Loading..."}
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
