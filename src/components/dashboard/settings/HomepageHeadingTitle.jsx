import { useDispatch, useSelector } from "react-redux";
import { addProjectStyles } from "../../../styles";
import { fetchHeadingTitleData } from "../../../features/settings/settingSlice";
import { useEffect } from "react";
import { updateHomepageHeadingTitle } from "../../../features/settings/settingAPI";

const HomepageHeadingTitle = () => {
  const { title } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const updateId = title[0]?._id;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title: e.target.title.value };

    // it had some issue, its not updating data
    // dispatch(updateTitle(updateId, data));

    // temporary solution
    updateHomepageHeadingTitle(updateId, data);
  };

  useEffect(() => {
    dispatch(fetchHeadingTitleData());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl">Homepage Heading Title</h1>
      <input
        className={`${addProjectStyles.inputStyle} mt-5`}
        name="title"
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
