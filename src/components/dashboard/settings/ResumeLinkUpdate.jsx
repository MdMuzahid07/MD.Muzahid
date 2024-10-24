import toast from "react-hot-toast";
import { addProjectStyles } from "../../../styles";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/profile/profileApi";
import { useState } from "react";

const ResumeLinkUpdate = () => {
  const [resumeLink, setResumeLink] = useState("");
  const { data: profile } = useGetProfileQuery();
  const [updateProfile, { data, isLoading }] = useUpdateProfileMutation();
  const myResume = profile?.data[0];

  const handleSave = async () => {
    if (resumeLink) {
      const titleFormData = new FormData();
      titleFormData.append("data", JSON.stringify({ resumeLink: resumeLink }));
      try {
        await updateProfile({ id: myResume?._id, data: titleFormData });
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
      <h1 className="text-xl md:text-4xl">Resume Link Update</h1>
      <input
        onChange={(e) => setResumeLink(e.target.value)}
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        name=""
        id=""
        value={resumeLink}
        placeholder={myResume?.resumeLink}
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

export default ResumeLinkUpdate;
