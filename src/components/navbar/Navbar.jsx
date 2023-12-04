import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { useState } from "react";
import { logo, menu_close, menu_open } from "../../assets";
import DropDown from "./DropDown";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} bg-transparent w-full flex items-center py-5 fixed top-0 z-50`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link
          path="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <figure className="w-9 h-9 object-contain">
            <img src={logo} alt="Md.Muzahid" />
          </figure>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Md. Muzahid
          </p>
        </Link>
        <div>
          <img
            className="bg-white"
            onClick={() => setToggle(!toggle)}
            src={toggle ? menu_close : menu_open}
            alt="menu"
          />
          <DropDown toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
