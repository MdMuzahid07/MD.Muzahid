import toast from "react-hot-toast";
import { addProjectStyles } from "../../../styles";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/profile/profileApi";
import { useState } from "react";

const EmailUpdate = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const { data: profile } = useGetProfileQuery();
  const [updateProfile, { data, isLoading }] = useUpdateProfileMutation();
  const myEmail = profile?.data[0];

  const handleSave = async () => {
    if (emailAddress) {
      const titleFormData = new FormData();
      titleFormData.append("data", JSON.stringify({ email: emailAddress }));
      try {
        await updateProfile({ id: myEmail?._id, data: titleFormData });
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
      <h1 className="text-xl md:text-4xl">Email Update</h1>
      <input
        onChange={(e) => setEmailAddress(e.target.value)}
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        name=""
        id=""
        value={emailAddress}
        placeholder={myEmail?.email}
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

export default EmailUpdate;
