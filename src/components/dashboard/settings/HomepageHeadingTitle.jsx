import toast from "react-hot-toast";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/profile/profileApi";
import { addProjectStyles } from "../../../styles";
import { useState } from "react";

const HomepageHeadingTitle = () => {
  const [titleText, setTitleText] = useState("");
  const { data: profile } = useGetProfileQuery();
  const [updateProfile, { data, isLoading }] = useUpdateProfileMutation();
  const title = profile?.data[0];

  const handleSave = async () => {
    if (titleText) {
      const titleFormData = new FormData();
      titleFormData.append(
        "data",
        JSON.stringify({ titleOfHomepageHeader: titleText })
      );
      try {
        await updateProfile({ id: title?._id, data: titleFormData });
      } catch (error) {
        console.log(error);
        toast.error(error?.data?.message, { id: "profileImgToastId^098*)%" });
      }
    }
  };

  if (isLoading) {
    toast.loading("Saving...", { id: "profileImgToastId^098*)%" });
  }
  if (data) {
    toast.success("Saved", { id: "profileImgToastId^098*)%" });
  }

  return (
    <section className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Homepage Heading Title</h1>
      <input
        onChange={(e) => setTitleText(e.target.value)}
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        name="title"
        id=""
        value={titleText}
        placeholder={title?.titleOfHomepageHeader}
      ></input>
      <button
        onClick={handleSave}
        className="px-7 rounded-full py-2 bg-slate-100 mt-5 text-2xl border"
      >
        Save
      </button>
    </section>
  );
};

export default HomepageHeadingTitle;
