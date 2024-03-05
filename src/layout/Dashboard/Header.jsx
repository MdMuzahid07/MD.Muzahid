import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

/* eslint-disable react/prop-types */
const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleLogout = async () => {
    await signOut(auth)
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="w-full h-20 bg-white sticky top-0 left-0 text-primary border-b px-7 flex justify-between items-center z-20">
      <button
        className={`${
          !isSidebarOpen ? "bg-slate-100" : "bg-red-500 text-white"
        } px-4 py-1 rounded-full border tracking-wider`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
      <button
        className="bg-slate-100 px-4 py-1 rounded-full border tracking-wider"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
