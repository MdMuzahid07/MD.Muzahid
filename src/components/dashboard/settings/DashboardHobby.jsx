import toast from "react-hot-toast";
import { addProjectStyles } from "../../../styles";
import AddSkillAndHobbyManageTable from "../../ui/dashboard/AddSkillAndHobbyManageTable";

//! fake data just for ui view
const tableData = [
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 1,
    logo: "/path/to/logo1.png",
    name: "Site 1",
    url: "https://site1.com",
  },
  {
    id: 2,
    logo: "/path/to/logo2.png",
    name: "Site 2",
    url: "https://site2.com",
  },
];

const DashboardHobby = () => {
  const handleDelete = () => {
    toast.error("delete btn working", { id: "skillDeleteBtnToastId" });
  };

  const handleUpdate = () => {
    toast.success("update btn working", { id: "skillUpdateBtnToastId" });
  };

  return (
    <section className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Add Hobbies</h1>
      <div className="grid md:grid-cols-12 mt-5 gap-6">
        <div className="col-span-12 xl:col-span-5 bg-slate-100 p-7 rounded-2xl border ">
          <div>
            <h1 className="text-xl mb-5">Technology Image or Logo</h1>
            <label htmlFor="profileImage">
              <img
                title="Select Logo"
                // src={img.length > 5 ? img : profileImg}
                className="w-20 h-20 p-1 cursor-pointer border-4 border-dashed border-slate-200 rounded-full bg-white"
                alt=""
              />
              <input
                type="file"
                className="hidden"
                name="profile image"
                id="profileImage"
                placeholder="Skill Icon"
              ></input>
            </label>
          </div>
          <div className="mt-10">
            <div className="mb-10">
              <h1 className="text-xl">Technology Name</h1>
              <input
                className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
                name=""
                id=""
                placeholder="TypeScript"
              ></input>
            </div>
            <div>
              <h1 className="text-xl">Official Url</h1>
              <input
                className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
                name=""
                id=""
                placeholder="https://www.typescriptlang.org/"
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="px-7 mt-10 rounded-full py-2 bg-black text-white text-2xl border active:text-red-500"
          >
            Save
          </button>
        </div>
        <div className="col-span-12 xl:col-span-7 bg-slate-100 rounded-2xl border py-3 max-h-[600px] overflow-y-auto">
          <AddSkillAndHobbyManageTable
            data={tableData}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardHobby;
