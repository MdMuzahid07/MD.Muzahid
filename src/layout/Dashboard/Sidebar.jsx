/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  const [active, setActive] = useState("/dashboard/home");
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`${
        isSidebarOpen ? "flex" : "hidden"
      } col-span-12 sm:col-span-3 lg:col-span-2 text-[18px] sm:text-[25px] md:text-[40px] font-bold bg-primary p-7 text-white min-h-screen w-full`}
    >
      <ul className="fixed top-10">
        <li>
          <Link
            to="home"
            onClick={() => {
              setActive("/dashboard/home");
            }}
            className={
              pathname && active === "/dashboard/home"
                ? "bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500"
                : "text-white"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setActive("/dashboard/addProject");
            }}
            to="addProject"
            className={
              pathname && active === "/dashboard/addProject"
                ? "bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500"
                : "text-white"
            }
          >
            Project Upload
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setActive("/dashboard/manageProjects");
            }}
            to="manageProjects"
            className={
              pathname && active === "/dashboard/manageProjects"
                ? "bg-clip-text text-transparent  bg-gradient-to-r from-pink-500 to-violet-500"
                : "text-white"
            }
          >
            Manage Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
