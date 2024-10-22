import { addProjectStyles } from "../../../styles";

const HomepageHeadingTitle = () => {
  return (
    <form className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Homepage Heading Title</h1>
      <input
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        name="title"
        id=""
        placeholder="I DEVELOP WEB WORLD, AND REACT NATIVE APPLICATION"
      ></input>
      <button className="px-7 rounded-full py-2 bg-slate-100 mt-5 text-2xl border">
        Save
      </button>
    </form>
  );
};

export default HomepageHeadingTitle;
