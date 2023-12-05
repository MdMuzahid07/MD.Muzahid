import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { useState } from "react";
import { logo, menu_close, menu_open } from "../../assets";
import DropDown from "./DropDown";

const Navbar = () => {
  // const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} bg-primary ${
        toggle ? "bg-opacity-100" : "bg-opacity-100 xs:bg-opacity-0"
      }
      w-full flex items-center py-5 fixed top-0 z-50 `}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link
          path="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
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
            <button className="transition ease-in-out delay-50 w-28 h-10 bg-gradient-to-r hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-lg active:scale-75 hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-lg p-1">
              <div className="bg-black rounded-md w-full h-full flex items-center justify-center">
                <p>HIRE ME</p>
              </div>
            </button>
            <img
              onClick={() => setToggle(!toggle)}
              src={toggle ? menu_close : menu_open}
              alt="menu"
            />
          </div>
          <DropDown toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
