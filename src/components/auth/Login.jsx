import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import GoogleSignIn from "./GoogleSignIn";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { loginEmailAndPassword, user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  if (
    user &&
    user?.emailVerified &&
    user?.email === "mdmuzahid.dev@gmail.com"
  ) {
    navigate("/dashboard/home");
  } else if (
    user &&
    !user?.emailVerified &&
    user?.email !== "mdmuzahid.dev@gmail.com"
  ) {
    toast.error("Please Enter Admin Email", { id: "login error" });
    logOut();
  }

  const handleLogin = (e) => {
    e.preventDefault();
    loginEmailAndPassword(email, password);
  };

  return (
    <section className="flex justify-center items-center min-h-screen w-full stripeBG z-0">
      <div className="w-[350px] min-h-[550px] bg-gradient-to-r hover:-translate-y-1 duration-300  hover:shadow-lg hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-lg p-1">
        <div className="bg-black min-h-[546px] w-[346] rounded-lg relative">
          <div className="flex justify-center">
            <img className="w-14 mt-7" src={logo} alt="" />
          </div>
          <h1 className="text-2xl text-slate-400 tracking-wider text-center pt-5">
            Please Login
          </h1>
          <form onSubmit={handleLogin} className="mt-12 px-7">
            <div>
              <label htmlFor="email">
                <span className="text-xs text-slate-400 pl-1">
                  Your Email Address
                </span>
                <input
                  className="w-full px-3 bg-primary border-2 rounded-full mt-2 border-[#F221FF] focus:outline-none"
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-7">
              <label htmlFor="password">
                <span className="text-xs text-slate-400 pl-1">
                  Your Password
                </span>
                <div className="relative">
                  <input
                    className="w-full px-3 bg-primary border-2 rounded-full mt-2 border-[#F221FF] focus:outline-none"
                    type={isPassVisible ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={() => setIsPassVisible(!isPassVisible)}
                    className="absolute right-3 top-3.5"
                  >
                    {isPassVisible ? (
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
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
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
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
            </div>
            <button
              type="submit"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleLogin();
                }
              }}
              className="w-full text-md text-center h-8  bg-[#F221FF] text-slate-300 mt-7  rounded-full"
            >
              Login
            </button>
            <div className="mt-12">
              <GoogleSignIn />
            </div>
          </form>
          <p className="absolute bottom-5 text-xs text-center w-full tracking-wider">
            <span>
              {`Don't`} have an account ? Please{" "}
              <Link to="/signUp" className="text-indigo-500">
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
