import { useContext } from "react";
import { AuthContext } from "../../context/provider/AuthProvider";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-primary">
      <button
        onClick={handleSignIn}
        className="transition ease-in-out delay-50 w-72 h-14 bg-gradient-to-r hover:-translate-y-1 duration-300 hover:scale-110 hover:shadow-lg active:scale-75 hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-lg p-1"
      >
        <div className="bg-black rounded-md w-full h-full flex items-center justify-center">
          <p>Google Sign In</p>
        </div>
      </button>
    </div>
  );
};

export default GoogleSignIn;
