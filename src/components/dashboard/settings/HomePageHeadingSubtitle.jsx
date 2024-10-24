import { addProjectStyles } from "../../../styles";
import { useEffect } from "react";

const HomePageHeadingSubtitle = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title: e.target.title.value };

    // it had some issue, its not updating data
    // dispatch(updateTitle(updateId, data));

    // temporary solution
  };

  return (
    <form onSubmit={handleSubmit} className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Homepage Heading Subtitle</h1>
      <textarea
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        rows={3}
        name="title"
        id=""
        placeholder="I DEVELOP WEB WORLD, AND REACT NATIVE APPLICATION"
      ></textarea>
      <button className="px-7 py-2 bg-slate-100 mt-5 text-2xl border rounded-full">
        Save
      </button>
    </form>
  );
};

export default HomePageHeadingSubtitle;
