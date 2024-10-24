import toast from "react-hot-toast";
import { addProjectStyles } from "../../../styles";
import { useState } from "react";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/profile/profileApi";

const HomePageHeadingSubtitle = () => {
  const [titleText, setTitleText] = useState("");
  const { data: profile } = useGetProfileQuery();
  const [updateProfile, { data, isLoading }] = useUpdateProfileMutation();
  const title = profile?.data[0];

  const handleSave = async () => {
    if (titleText) {
      const titleFormData = new FormData();
      titleFormData.append(
        "data",
        JSON.stringify({ subtitleOfHomepageHeader: titleText })
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
      <h1 className="text-xl md:text-4xl">Homepage Heading Subtitle</h1>
      <textarea
        onChange={(e) => setTitleText(e.target.value)}
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        rows={3}
        name="title"
        value={titleText}
        id=""
        placeholder={title?.subtitleOfHomepageHeader}
      ></textarea>
      <button
        onClick={handleSave}
        className="px-7 py-2 bg-slate-100 mt-5 text-2xl border rounded-full"
      >
        Save
      </button>
    </section>
  );
};

export default HomePageHeadingSubtitle;
