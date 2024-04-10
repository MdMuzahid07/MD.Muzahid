import { useContext } from "react";
import { AuthContext } from "../../context/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleSignIn = () => {
  const { googleSignIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = () => {
    googleSignIn()
      .then((res) => {
        if (
          res?.user &&
          res?.user?.displayName === "Md Muzahid" &&
          res?.user?.email === "mdmuzahid.dev@gmail.com"
        ) {
          navigate("/dashboard/home");
        } else {
          toast.error("Please Enter Admin Email");
          logOut();
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          id: "singInError",
          style: {
            borderRadius: "0px",
            background: "#0C0C0C",
            color: "#fff",
            fontSize: "30px",
            padding: "10px 20px",
          },
        });
      });
  };
  return (
    <div>
      <button
        onClick={handleSignIn}
        className="transition ease-in-out delay-50 w-72 h-8 bg-gradient-to-r hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-lg active:scale-75 hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-full p-1"
      >
        <div className="bg-black rounded-full w-full h-full flex items-center justify-center text-xs tracking-wider uppercase">
          <p>Login using Google</p>
        </div>
      </button>
    </div>
  );
};

export default GoogleSignIn;
