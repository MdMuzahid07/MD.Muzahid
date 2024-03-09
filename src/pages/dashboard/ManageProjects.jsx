import Card from "../../components/dashboard/manageProjects/Card";
import { addProjectStyles } from "../../styles";

const ManageProjects = () => {
  return (
    <main className="mb-32">
      <h1 className={`${addProjectStyles.headingText} mt-14`}>
        Manage Projects
      </h1>
      <header className="bg-slate-50 px-7 py-4 w-full border mt-14">
        <label htmlFor="Search">
          <input
            className="px-4 py-3 w-[300px] md:w-[400px] lg:w-[700px] focus:outline-none border"
            type="text"
            placeholder="Search By Name"
            id="Search"
          />
          <button className="px-4 py-3 bg-white border border-l-0">
            Enter
          </button>
        </label>
      </header>
      <section className="mt-10 bg-slate-50 border p-7 grid md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7]?.map((index) => {
          return <Card key={index} />;
        })}
      </section>
    </main>
  );
};

export default ManageProjects;
