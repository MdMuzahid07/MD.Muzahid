import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 h-full w-full relative">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`${
            isSidebarOpen
              ? "col-span-12 lg:col-span-8 xl:col-span-10"
              : "col-span-12"
          }`}
        >
          <Header
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <div>
            <div
              className={`sm:px-16 px-6 ${
                isSidebarOpen ? "max-w-7xl" : "max-w-screen-2xl"
              } min-h-screen w-full mx-auto `}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Dashboard;
