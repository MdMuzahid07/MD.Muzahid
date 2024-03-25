import { addProjectStyles } from "../../../styles";

const HomepageHeadingTitle = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl">Homepage Heading Title</h1>
      <input
        className={`${addProjectStyles.inputStyle} mt-5`}
        name=""
        id=""
        placeholder="I DEVELOP WEB WORLD, AND REACT NATIVE APPLICATION"
      ></input>
      <button className="px-4 py-2 bg-slate-100 mt-5 text-2xl border">
        Save
      </button>
    </form>
  );
};

export default HomepageHeadingTitle;
