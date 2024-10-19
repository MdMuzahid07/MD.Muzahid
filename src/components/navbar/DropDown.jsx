/* eslint-disable react/prop-types */
import { navLinks } from "../../constants";
import MagneticEffect from "../../utils/MagneticEffect";
import { useNavigate } from "react-router-dom";

const DropDown = ({ toggle, setToggle }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        toggle ? "flex" : "hidden"
      } bg-black absolute top-[60px] right-0 w-full min-h-screen z-10 text-slate-300 p-6`}
    >
      <ul className="flex flex-col pt-16 xs:pt-0 items-center font-bold text-[60px] xs:text-[80px] md:text-[90px] lg:text-[100px] 3xl:text-[140px]  w-full">
        {navLinks.map(({ title, id }) => (
          <MagneticEffect key={id}>
            <li
              onClick={() => {
                setToggle(!toggle);
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <a
                className="font-bold ease-in duration-300 hover:tracking-widest  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500"
                href={`#${id}`}
              >
                {title}
              </a>
            </li>
          </MagneticEffect>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
