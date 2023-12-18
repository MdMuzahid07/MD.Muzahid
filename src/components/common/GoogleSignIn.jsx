import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useEffect } from "react";
import Preloader from "../preloader/Preloader";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signOut, SignOutLoading, SignOutError] = useSignOut(auth);

  useEffect(() => {
    if (!loading && !error && user) {
      if (
        user?.user?.email === "mdmuzahid.dev@gmail.com" &&
        user?.user?.displayName === "Md Muzahid"
      ) {
        navigate("/dashboard/home");
      } else {
        signOut();
        window.alert(
          "This button serves to authenticate the owner for Dashboard access. And you are not qualified as the legitimate owner of this website, you are automatically logged out."
        );
      }
    }
  }, [user, error, loading, navigate, signOut]);

  if ((loading && !error && !user) || SignOutLoading) {
    return <Preloader />;
  }

  if (!loading && !error && user) {
    if (
      user?.user?.email === "mdmuzahid.dev@gmail.com" &&
      user?.user?.displayName === "Md Muzahid"
    ) {
      window.alert("Welcome", user.user.displayName);
    }
  }

  if ((!loading && error && !user) || SignOutError) {
    console.log(
      (error.message, "error") || (SignOutError.message, "sing out error")
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-primary">
      <button
        onClick={() => signInWithGoogle()}
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
