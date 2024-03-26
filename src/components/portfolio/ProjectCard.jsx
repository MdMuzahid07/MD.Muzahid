/* eslint-disable react/prop-types */
import { HR } from "../common/HR";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { imageLoadingShadow } from "../../assets";

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/projectDetails/${id}`);
  };

  return (
    <div className="bg-primary">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
          {/* heading start  */}
          <div>
            <h1>{`${index < 9 ? 0 : " "}${index + 1}.`}</h1>
            <h1 className="text-[30px] md:text-[text-50px] lg:text-[80px] font-bold">
              {project?.name}
            </h1>
            <button
              onClick={() => handleClick(project?._id)}
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
            </button>
            <div className="flex gap-4 mt-20 text-[18px]">
              <h1>Core :</h1>
              <ul>
                {project?.coreTechs?.map((tech, index) => (
                  <li key={tech + index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* heading end */}
          <div>
            <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
              <img
                onClick={() => handleClick(project?._id)}
                className="w-full h-full transition ease-in-out delay-100 object-cover  object-center  sm:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[500px] brightness-50 hover:brightness-100"
                src={
                  project?.thumbnailImg
                    ? project?.thumbnailImg
                    : imageLoadingShadow
                }
                alt="Project-Thumbnail"
              />
            </Tilt>
          </div>
        </div>
      </div>
      <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-20" />
    </div>
  );
};

export default ProjectCard;
