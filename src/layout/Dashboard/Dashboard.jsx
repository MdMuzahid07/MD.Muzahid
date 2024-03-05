import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { styles } from "../../styles";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 7000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // // Default options for specific types
          // success: {
          //   duration: 3000,
          //   theme: {
          //     primary: "green",
          //     secondary: "black",
          //   },
          // },
        }}
      />
    </>
  );
};

export default Dashboard;
