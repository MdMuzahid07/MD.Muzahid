import { useContext } from "react";
import { AuthContext } from "../../context/provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log out success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="w-full h-20 bg-white sticky top-0 left-0 text-primary border-b px-7 flex justify-between items-center z-20">
      <div className="flex items-center gap-4">
        <button
          className={`${
            !isSidebarOpen ? "bg-slate-100" : "bg-red-500 text-white"
          } px-4 py-1 rounded-full border tracking-wider flex items-center gap-2`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Close
            </p>
          ) : (
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              Open
            </p>
          )}
        </button>
        <Link
          to="/"
          className="hidden md:block bg-slate-100 px-4 py-1 rounded-full border tracking-wider"
        >
          Homepage
        </Link>
      </div>
      {user && (
        <p className="bg-slate-100 hidden md:block px-4 py-1 rounded-full border tracking-wider">
          Hello: {user?.email}
        </p>
      )}
      <button
        className="bg-slate-100 flex items-center gap-2 px-4 py-1 rounded-full border tracking-wider"
        onClick={handleLogout}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        <span>Logout</span>
      </button>
    </header>
  );
};

export default Header;
