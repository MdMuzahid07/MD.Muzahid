import toast from "react-hot-toast";
import { addProjectStyles, styles } from "../../../styles";
import {
  useDeleteExperienceByIdMutation,
  useGetExperienceQuery,
} from "../../../redux/features/experience/experienceApi";
import { useNavigate } from "react-router-dom";

const DashboardManageExperience = () => {
  const navigate = useNavigate();
  const { data: experiences } = useGetExperienceQuery();
  const [deleteExperienceById, { data, error, isLoading }] =
    useDeleteExperienceByIdMutation();

  const handleDelete = async (id) => {
    const proceed = window.confirm("delete education?");
    if (proceed) {
      try {
        await deleteExperienceById(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (error) {
    toast.error(error?.data?.message, { id: "experienceDeleteToastId" });
  }

  if (isLoading) {
    toast.loading("Deleting...", { id: "experienceDeleteToastId" });
  }
  if (data) {
    toast.success("Done", { id: "experienceDeleteToastId" });
  }

  const handleUpdate = (id) => {
    navigate(`/dashboard/updateExperience/${id}`);
  };

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>
        Manage Experience
      </h1>
      <section className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-t bg-slate-100 text-left">
              <th className="px-4 py-7 border-b">No</th>
              <th className="px-4 py-7 border-b">Company Name</th>
              <th className="px-4 py-7 border-b">Position</th>
              <th className="px-4 py-7 border-b">Start Date</th>
              <th className="px-4 py-7 border-b">End Date</th>
              <th className="px-4 py-7 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {experiences?.data?.length > 0 ? (
              experiences?.data?.map((experience, index) => (
                <tr key={experience._id} className="hover:bg-gray-100">
                  <td className="px-4 py-7 border-b">{index + 1}</td>
                  <td className="px-4 py-7 border-b">{experience?.company}</td>
                  <td className="px-4 py-7 border-b">{experience?.position}</td>
                  <td className="px-4 py-7 border-b">
                    {experience?.startDate}
                  </td>
                  <td className="px-4 py-7 border-b">{experience?.endDate}</td>
                  <td className="px-4 py-7 border-b">
                    <button
                      onClick={() => handleUpdate(experience?._id)}
                      className="mr-2 px-4 py-1 bg-black text-white rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(experience._id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-7 text-xl text-red-500 text-center border-b"
                >
                  No experience available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default DashboardManageExperience;
