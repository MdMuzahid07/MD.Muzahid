import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import Preloader from "../../components/preloader/Preloader";
import auth from "../../firebase.init";

/* eslint-disable react/prop-types */
const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const [signOut, SignOutLoading, SignOutError] = useSignOut(auth);

  const handleOnclick = () => {
    signOut();
    setTimeout(navigate("/"), 3000);
  };

  if (SignOutLoading && !SignOutError) {
    return <Preloader />;
  }

  if (!SignOutLoading && SignOutError) {
    SignOutError, "sing out error";
  }

  return (
    <header className="w-full h-20 bg-white sticky top-0 left-0 text-primary border-b px-7 flex justify-between items-center z-20">
      <button
        className="text-[18px]"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      <button onClick={handleOnclick}>Logout</button>
    </header>
  );
};

export default Header;
