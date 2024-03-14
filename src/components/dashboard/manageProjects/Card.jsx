/* eslint-disable react/prop-types */
import Toggle from "../../ui/Toggle";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProject } from "../../../features/projects/projectSlice";
import Spinner from "../../preloader/Spinner";
import { useNavigate } from "react-router-dom";

const Card = ({ project }) => {
  const { deleteSuccess, isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      dispatch(deleteAProject(id));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (deleteSuccess) {
    toast.success("Deleted Successfully", { id: "projectDeleted" });
  }

  const redirectUpdatePage = (id) => {
    navigate(`/dashboard/updateProject/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${project?.thumbnailImg})`,
        backgroundSize: "cover",
      }}
      className="w-full h-44 border relative hover:drop-shadow"
    >
      <div className="w-full h-44 bg-black bg-opacity-50 p-4">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl text-white">{project?.name}</h1>
        </header>
        <section>
          <div className="flex items-center gap-3 my-3">
            <p className="text-xs  border px-2 py-1 bg-white">
              Posted: 09-03-2024
            </p>
            <p className="text-xs border px-2 py-1 bg-white">
              Updated: 09-03-2024
            </p>
          </div>
          <label htmlFor="" className="flex items-center gap-2">
            <span className="text-xs text-white">Active</span>
            <Toggle />
          </label>
        </section>

        <div className="mt-4">
          <div className="flex justify-between items-center ">
            <p className="w-44 h-8 bg-white border flex justify-center items-center tracking-wider font-bold text-xl">
              MERN-STACK
            </p>
            <div className="flex items-center gap-3 mr-2">
              {/* redirect update project */}
              <button
                onClick={() => redirectUpdatePage(project?._id)}
                className="w-6 h-6 border bg-white hover:bg-indigo-500 hover:text-white flex items-center justify-center rounded-full"
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>

              {/* handle delete */}
              <button
                onClick={() => handleDelete(project?._id)}
                className="w-6 h-6 border bg-white hover:bg-red-500 hover:text-white flex items-center justify-center rounded-full"
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
