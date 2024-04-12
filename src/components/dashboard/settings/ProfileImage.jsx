import axios from "axios";
import useImgBBUpload from "../../../hooks/useImgBBUpload";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ProfileImage = () => {
  const { img, getEvent } = useImgBBUpload();
  const [profileImg, setProfileImg] = useState(" ");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/profile-img")
      .then((response) => {
        setProfileImg(response?.data?.data[0]?.Img);
      })
      .catch((error) =>
        toast.error(error.message, { id: "profile img fetch error" })
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        "http://localhost:5000/api/v1/profile-img/66188ecbc9812c6df5c6cbb3",
        { Img: img }
      )
      .then((response) => {
        if (response?.data?.success) {
          toast.success("Profile image updated", { id: "profile img update" });
        }
      })
      .catch((error) =>
        toast.error(error.message, { id: "profile img upload error" })
      );
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl mb-5">Profile Image</h1>
      <div className="flex items-center gap-4">
        <label htmlFor="profileImage">
          <img
            src={img.length > 5 ? img : profileImg}
            className="w-24 h-24"
            alt=""
          />
          <input
            onChange={getEvent}
            type="file"
            className="hidden"
            name="profile image"
            id="profileImage"
          ></input>
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-slate-100 text-2xl border active:text-red-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileImage;
