/* eslint-disable react/prop-types */
import { navLinks } from "../../constants";

const DropDown = ({ toggle, setToggle }) => {
  return (
    <div
      className={`${
        toggle ? "flex" : "hidden"
      } bg-primary absolute top-[60px] right-0 w-full min-h-screen z-10 text-white p-6`}
    >
      <ul className="flex flex-col pt-16 xs:pt-0 items-center font-bold text-[60px] xs:text-[80px] md:text-[90px] lg:text-[100px] 3xl:text-[140px]  w-full">
        {navLinks.map(({ title, id }) => (
          <li
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer"
            key={id}
          >
            <a
              className="font-bold ease-in duration-300 hover:tracking-widest  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500"
              href={`#${id}`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
