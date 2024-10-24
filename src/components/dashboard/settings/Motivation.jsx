import { useState } from "react";
import { addProjectStyles } from "../../../styles";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/profile/profileApi";
import toast from "react-hot-toast";

const Motivation = () => {
  const [myMotivationText, setMyMotivationText] = useState("");
  const { data: profile } = useGetProfileQuery();
  const [updateProfile, { data, isLoading }] = useUpdateProfileMutation();
  const myMotivation = profile?.data[0];

  const handleSave = async () => {
    if (myMotivationText) {
      const titleFormData = new FormData();
      titleFormData.append(
        "data",
        JSON.stringify({ motivation: myMotivationText })
      );
      try {
        await updateProfile({ id: myMotivation?._id, data: titleFormData });
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
      <h1 className="text-xl md:text-4xl">My Motivation(Optional)</h1>
      <textarea
        onChange={(e) => setMyMotivationText(e.target.value)}
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        name=""
        value={myMotivationText}
        id=""
        rows={5}
        placeholder={myMotivation?.motivation}
      ></textarea>
      <button
        onClick={handleSave}
        className="px-7 rounded-full py-2 bg-slate-100 mt-5 text-2xl border"
      >
        Save
      </button>
    </section>
  );
};

export default Motivation;
