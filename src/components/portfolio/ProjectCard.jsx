import { Link } from "react-router-dom";
import { HR } from "../common/HR";

const ProjectCard = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
          {/* heading start  */}
          <div>
            <h1>01.</h1>
            <h1 className="text-[30px] md:text-[text-50px] lg:text-[80px] font-bold">
              PROJECT NAME
            </h1>
            <Link
              to="/projectDetails"
              type="button"
              className="flex gap-4 text-[40px]"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
            <div className="flex gap-4 mt-20 text-[18px]">
              <h1>Core :</h1>
              <ul>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>ExpressJS</li>
              </ul>
            </div>
          </div>
          {/* heading end */}
          <div>
            <img
              className="w-full h-full  md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]"
              src="https://img.freepik.com/free-vector/astronomical-observatory-telescopes-cartoon_1441-3176.jpg?t=st=1702276693~exp=1702277293~hmac=9bb3fb0821712658be22288c12309e4545819cac4c669f41d868d41f40ab305f"
              alt=""
            />
          </div>
        </div>
      </div>
      <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-20" />
    </div>
  );
};

export default ProjectCard;
