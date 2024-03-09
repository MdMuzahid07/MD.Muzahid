import { Link } from "react-router-dom";
import Card from "../../components/dashboard/manageProjects/Card";
import { addProjectStyles } from "../../styles";

const ManageProjects = () => {
  return (
    <main className="mb-32">
      <h1 className={`${addProjectStyles.headingText} mt-14`}>
        Manage Projects
      </h1>
      <header className="md:bg-slate-50 md:px-7 py-4 w-full gap-5 flex justify-center md:justify-between  items-center md:border mt-14">
        <div className="flex relative">
          <input
            className="px-4 py-3 w-[300px] md:w-[400px] lg:w-[700px] focus:outline-none border"
            type="text"
            placeholder="Search By Name"
            id="Search"
          />
          <button className="absolute top-0 right-0 px-4 py-3 bg-primary text-white">
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
      <section className="mt-10 md:bg-slate-50 md:border md:p-7 grid lg:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7]?.map((index) => {
          return <Card key={index} />;
        })}
      </section>
    </main>
  );
};

export default ManageProjects;
