import { MdMuzahid } from "../../../assets";

const ProfileImage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl mb-5">Profile Image</h1>
      <div className="flex items-center gap-4">
        <label htmlFor="profileImage">
          <img src={MdMuzahid} className="w-24 h-24" alt="" />
          <input
            type="file"
            className="hidden"
            name="profile image"
            id="profileImage"
          ></input>
        </label>

        <button className="px-4 py-2 bg-slate-100 text-2xl border">Save</button>
      </div>
    </form>
  );
};

export default ProfileImage;
