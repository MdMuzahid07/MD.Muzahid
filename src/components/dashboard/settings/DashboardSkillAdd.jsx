import toast from "react-hot-toast";
import { addProjectStyles } from "../../../styles";
import AddSkillAndHobbyManageTable from "../../ui/dashboard/AddSkillAndHobbyManageTable";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  useAddSkillMutation,
  useDeleteSkillByIdMutation,
  useGetAllSkillsQuery,
} from "../../../redux/features/skill/skillApi";

const DashboardSkillAdd = () => {
  const { register, handleSubmit } = useForm();
  const [techIcon, setTechIcon] = useState(null);
  const [previewTechIcon, setPreviewTechIcon] = useState("");
  const [addSkill, { data, error, isLoading }] = useAddSkillMutation();
  const [
    deleteSkillById,
    { data: deleteData, isLoading: deleteIsLoad, error: deleteError },
  ] = useDeleteSkillByIdMutation();
  const { data: allSkills } = useGetAllSkillsQuery();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setTechIcon(file);
      setPreviewTechIcon(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    const skillData = {
      name: data.name,
      url: data.url,
    };
    const skillFormData = new FormData();
    skillFormData.append("data", JSON.stringify(skillData));
    skillFormData.append("icon", techIcon);

    console.log(skillFormData.get("data"));
    console.log(skillFormData.get("image"));

    try {
      await addSkill({ data: skillFormData });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    const proceed = window.confirm("delete skill?");
    try {
      if (proceed) {
        await deleteSkillById(id);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // const handleUpdate = () => {
  //   toast.success("Update button working", { id: "skillUpdateBtnToastId" });
  // };

  if (isLoading) {
    toast.loading("Saving...", { id: "skillAddToastId" });
  }
  if (error) {
    toast.error(error?.data?.message, { id: "skillAddToastId" });
  }
  if (data && data?.success) {
    toast.success("Saved", { id: "skillAddToastId" });
  }

  if (deleteIsLoad) {
    toast.loading("Saving...", { id: "skillDeleteToastId" });
  }
  if (deleteError) {
    toast.error(error?.data?.message, { id: "skillDeleteToastId" });
  }
  if (deleteData && deleteData?.success) {
    toast.success("Saved", { id: "skillDeleteToastId" });
  }

  return (
    <section className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Add Skills</h1>
      <div className="grid md:grid-cols-12 mt-5 gap-6">
        <div className="col-span-12 xl:col-span-7 bg-slate-100 rounded-2xl border py-3 max-h-[600px] overflow-y-auto">
          <AddSkillAndHobbyManageTable
            data={allSkills?.data}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-span-12 xl:col-span-5 bg-slate-100 p-7 rounded-2xl border ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="text-xl mb-5">Technology Image or Logo</h1>
              <label htmlFor="technologyIcon">
                <img
                  title="Select Logo"
                  src={previewTechIcon}
                  className="w-20 h-20 p-1 object-cover object-center cursor-pointer border-4 border-dashed border-slate-200 rounded-full bg-white"
                  alt="select tech icon"
                />
                <input
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                  name="technologyIcon"
                  id="technologyIcon"
                  accept="image/*"
                />
              </label>
            </div>
            <div className="mt-10">
              <div className="mb-10">
                <h1 className="text-xl">Technology Name</h1>
                <input
                  className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
                  {...register("name", { required: true })}
                  placeholder="TypeScript"
                />
              </div>
              <div>
                <h1 className="text-xl">Official Url</h1>
                <input
                  className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
                  {...register("url", { required: true })}
                  placeholder="https://www.typescriptlang.org/"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-7 mt-10 rounded-full py-2 bg-black text-white text-2xl border active:text-red-500"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DashboardSkillAdd;
