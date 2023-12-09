/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { useState } from "react";
import { logo } from "../../assets";
import DropDown from "./DropDown";
import { motion } from "framer-motion";
import PerspectiveText from "./PerspectiveText";

const Navbar = () => {
  const [toggle, setToggle] = useState(false, true);

  return (
    <div>
      <nav
        className={`${styles.paddingX} bg-black ${
          toggle ? "bg-opacity-100" : "bg-opacity-100 xs:bg-opacity-0"
        }
      w-full flex items-center py-5 fixed top-0 z-40 `}
      >
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <Link
            path="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
              setToggle(false);
            }}
          >
            <figure className="w-9 h-9 object-contain">
              <img src={logo} alt="Md.Muzahid" />
            </figure>
            <p className=" text-white text-[18px] font-bold cursor-pointer ">
              Md. Muzahid
            </p>
          </Link>
          <div>
            <div className="flex items-center justify-center gap-4 md:gap-10">
              {/* hire me button start here  */}
              <a
                href="#contact"
                type="button"
                className="transition ease-in-out hidden xs:flex delay-50 w-28 h-9 bg-gradient-to-r hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-lg active:scale-75 hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-lg p-1"
                onClick={() => setToggle(false)}
              >
                <div className="bg-black rounded-md w-full h-full flex items-center justify-center">
                  <p>HIRE ME</p>
                </div>
              </a>
              {/* hire me button end here  */}

              {/* menu toggle button start here */}
              <button
                onClick={() => setToggle(!toggle)}
                className="menu-btn bg-primary xs:bg-black"
              >
                <motion.div
                  animate={{ top: toggle ? "-100%" : "0" }}
                  transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
                  className="slider"
                >
                  <div className="el">
                    <PerspectiveText label="MENU" />
                  </div>
                  <div className="el">
                    <PerspectiveText label="CLOSE" />
                  </div>
                </motion.div>
              </button>
              {/* menu toggle button end here */}
            </div>
            <DropDown toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
