import { useEffect, useState } from "react";
import MagneticEffect from "../../utils/MagneticEffect";
import axios from "axios";
import toast from "react-hot-toast";

const FormHeader = () => {
  const [profileImg, setProfileImg] = useState(" ");

  useEffect(() => {
    axios
      .get("https://md-muzahid-server.vercel.app/api/v1/profile-img")
      .then((response) => {
        setProfileImg(response?.data?.data[0]?.Img);
      })
      .catch((error) =>
        toast.error(error.message, { id: "profile img fetch error" })
      );
  }, []);

  return (
    <div className="flex justify-end md:justify-start gap-4  md:gap-28 lg:56 items-center flex-row-reverse md:flex-row relative">
      {/* arrow svg start  */}
      <span className="text-slate-300 absolute right-0 -mt-24 block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      </span>
      {/* arrow svg end */}
      <h1 className="capitalize text-[30px] xs:text-[40px] md:text-[50px] xl:text-[90px]  text-slate-300 inline font-bold">
        {`Let's`} Work{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Together
        </span>{" "}
      </h1>
      <MagneticEffect>
        <figure className=" w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]">
          <img
            className="w-full h-full object-cover object-center rounded-full"
            src={profileImg}
            alt=""
          />
        </figure>{" "}
      </MagneticEffect>
    </div>
  );
};

export default FormHeader;
