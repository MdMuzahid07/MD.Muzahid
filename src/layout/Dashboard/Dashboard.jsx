import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { styles } from "../../styles";
import Header from "./Header";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  return (
    <>
      <div className="grid grid-cols-8 h-full w-full">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`${
            isSidebarOpen
              ? "col-span-12 sm:col-span-5 lg:col-span-6"
              : "col-span-12"
          }`}
        >
          <Header
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <div
            className={`${styles.paddingX} ${
              isSidebarOpen ? "max-w-7xl" : "max-w-screen-2xl"
            } min-h-screen w-full mx-auto`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
