import { useState } from "react";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/profile/profileApi";
import toast from "react-hot-toast";

const ProfileImage = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [imgPreview, setImgPreview] = useState("");
  const { data: profile } = useGetProfileQuery();
  const [updateProfile, { data, error, isLoading }] =
    useUpdateProfileMutation();
  const avatar = profile?.data[0];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImg(file);
      setImgPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (profileImg) {
      const avatarFormData = new FormData();
      avatarFormData.append("image", profileImg);
      try {
        await updateProfile({ id: avatar?._id, data: avatarFormData });
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }
  };

  if (isLoading) {
    toast.loading("Saving...", { id: "profileImgToastId^098*)%" });
  }
  if (error) {
    toast.error(error?.data?.message, { id: "profileImgToastId^098*)%" });
  }
  if (data && data?.success) {
    toast.success("Saved", { id: "profileImgToastId^098*)%" });
  }

  return (
    <section className="py-10 w-full">
      <h1 className="text-xl md:text-4xl mb-5">Profile Image</h1>
      <div className="flex items-center gap-4">
        <label htmlFor="profileImage">
          <img
            src={imgPreview ? imgPreview : avatar?.profileImage}
            className="w-28 h-28 border-4 object-cover object-center border-slate-200 rounded-full overflow-hidden"
            alt="Profile"
          />
          <input
            onChange={handleFileChange}
            type="file"
            className="hidden"
            name="profile image"
            id="profileImage"
            accept="image/*"
          />
        </label>

        <button
          onClick={handleSave}
          type="submit"
          className="px-7 rounded-full py-2 bg-slate-100 text-2xl border active:text-red-500"
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default ProfileImage;
