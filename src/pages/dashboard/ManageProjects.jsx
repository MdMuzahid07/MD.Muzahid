import { Link } from "react-router-dom";
import Card from "../../components/dashboard/manageProjects/Card";
import { addProjectStyles } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProjectsData } from "../../features/projects/projectSlice";
import Spinner from "../../components/preloader/Spinner";
import toast from "react-hot-toast";

const ManageProjects = () => {
  const { projects, isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projects]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="mb-32">
      <h1 className={`${addProjectStyles.headingText} mt-14`}>
        Manage Projects
      </h1>
      <header className="w-full gap-5 flex justify-center md:justify-between  items-center  mt-14">
        <div className="flex relative">
          <input
            onChange={() =>
              toast.error("its not functional", { id: "notapod87fypaodsf90ad" })
            }
            name="search"
            className="px-4 py-3 w-[300px] md:w-[400px] lg:w-[700px] focus:outline-none border"
            type="text"
            placeholder="Search By Name"
            id="Search"
          />
          <button className="absolute top-0 right-0 bottom-0 px-4 py-3 bg-primary text-slate-300">
            Enter
          </button>
        </div>
        <Link
          to="/dashboard/addProject"
          className="text-center w-full hidden lg:block md:w-24 border py-3 bg-white"
        >
          Add New
        </Link>
      </header>
      <section className="mt-10 grid lg:grid-cols-2 gap-10 bg-slate-100 p-10">
        {projects?.map((project) => {
          return <Card key={project?._id} project={project} />;
        })}
      </section>
    </main>
  );
};

export default ManageProjects;
