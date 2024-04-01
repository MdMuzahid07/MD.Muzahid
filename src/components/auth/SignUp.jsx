import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import { logo } from "../../assets";

const SignUp = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full stripeBG">
      <form
        className="w-[350px] min-h-[550px] bg-gradient-to-r hover:-translate-y-1 duration-300  hover:shadow-lg hover:shadow-red-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-white rounded-lg p-1"
        action=""
        onSubmit={handleLogin}
      >
        <div className="bg-black min-h-[546px] w-[346] rounded-lg/1 relative">
          <div className="flex justify-center">
            <img className="w-14 mt-7" src={logo} alt="" />
          </div>
          <h1 className="text-2xl text-slate-400 tracking-wider text-center pt-5">
            Please SignUp
          </h1>
          <div className="mt-12 px-7">
            <div>
              <label htmlFor="email">
                <span className="text-xs text-slate-400 pl-1">
                  Your Email Address
                </span>
                <input
                  className="w-full px-3 bg-primary border-2 rounded-full mt-2 border-[#F221FF] focus:outline-none"
                  type="text"
                  id="email"
                />
              </label>
            </div>
            <div className="mt-7">
              <label htmlFor="password">
                <span className="text-xs text-slate-400 pl-1">
                  Your Password
                </span>
                <input
                  className="w-full px-3 bg-primary border-2 rounded-full mt-2 border-[#F221FF] focus:outline-none"
                  type="text"
                  id="password"
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-center h-8  bg-[#F221FF] text-slate-300 mt-7  rounded-full"
            >
              SignUp
            </button>
            <div className="mt-12">
              <GoogleSignIn />
            </div>
          </div>
          <p className="absolute bottom-5 text-xs text-center w-full tracking-wider">
            <span>
              Already have an account ? Please{" "}
              <Link to="/login" className="text-indigo-500">
                SignUp
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;