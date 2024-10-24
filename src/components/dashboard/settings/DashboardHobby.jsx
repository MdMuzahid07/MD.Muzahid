import toast from "react-hot-toast";
import { addProjectStyles } from "../../../styles";
import AddSkillAndHobbyManageTable from "../../ui/dashboard/AddSkillAndHobbyManageTable";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  useAddHobbyMutation,
  useDeleteHobbyByIdMutation,
  useGetAllHobbyQuery,
} from "../../../redux/features/hobby/hobbyApi";

const DashboardSkillAdd = () => {
  const { register, handleSubmit } = useForm();
  const [techIcon, setTechIcon] = useState(null);
  const [previewTechIcon, setPreviewTechIcon] = useState("");
  const [addHobby, { data, error, isLoading }] = useAddHobbyMutation();
  const [
    deleteHobbyById,
    { data: deleteData, isLoading: deleteIsLoad, error: deleteError },
  ] = useDeleteHobbyByIdMutation();
  const { data: allHobbies } = useGetAllHobbyQuery();

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
    };
    const skillFormData = new FormData();
    skillFormData.append("data", JSON.stringify(skillData));
    skillFormData.append("icon", techIcon);

    try {
      await addHobby({ data: skillFormData });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    const proceed = window.confirm("delete skill?");
    try {
      if (proceed) {
        await deleteHobbyById(id);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // const handleUpdate = () => {
  //   toast.success("Update button working", { id: "skillUpdateBtnToastId" });
  // };

  if (isLoading) {
    toast.loading("Saving...", { id: "hobbyAddToastId" });
  }
  if (error) {
    toast.error(error?.data?.message, { id: "hobbyAddToastId" });
  }
  if (data && data?.success) {
    toast.success("Saved", { id: "hobbyAddToastId" });
  }

  if (deleteIsLoad) {
    toast.loading("Deleting...", { id: "hobbyDeleteToastId" });
  }
  if (deleteError) {
    toast.error(error?.data?.message, { id: "hobbyDeleteToastId" });
  }
  if (deleteData && deleteData?.success) {
    toast.success("Done", { id: "hobbyDeleteToastId" });
  }

  return (
    <section className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Add Hobby</h1>
      <div className="grid md:grid-cols-12 mt-5 gap-6">
        <div className="col-span-12 xl:col-span-5 bg-slate-100 p-7 rounded-2xl border ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="text-xl mb-5">Technology Image or Logo</h1>
              <label htmlFor="hobbyIcon">
                <img
                  title="Select Logo"
                  src={previewTechIcon}
                  className="w-20 h-20 p-1 cursor-pointer border-4 border-dashed border-slate-200 object-cover object-center rounded-full bg-white"
                  alt="select tech icon"
                />
                <input
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                  name="hobbyIcon"
                  id="hobbyIcon"
                  accept="image/*"
                />
              </label>
            </div>
            <div className="mt-10">
              <div className="mb-10">
                <h1 className="text-xl">Hobby Name</h1>
                <input
                  className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
                  {...register("name", { required: true })}
                  placeholder="Traveling"
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
        <div className="col-span-12 xl:col-span-7 bg-slate-100 rounded-2xl border py-3 max-h-[600px] overflow-y-auto">
          <AddSkillAndHobbyManageTable
            data={allHobbies?.data}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardSkillAdd;
