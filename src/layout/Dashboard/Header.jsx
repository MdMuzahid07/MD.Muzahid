import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="w-full h-20 bg-white sticky top-0 left-0 text-primary border-b px-7 flex justify-between items-center">
      <button
        className="text-[18px]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      <Link to="/">Logout</Link>
    </header>
  );
};

export default Header;
