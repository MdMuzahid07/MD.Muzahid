import { addProjectStyles, styles } from "../../styles";
import Spinner from "../../components/preloader/Spinner";
import {
  useDeleteProjectByIdMutation,
  useGetAllProjectsQuery,
} from "../../redux/features/project/projectApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ManageProjects = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  const [deleteProjectById, { isLoading: deleteIsLoading }] =
    useDeleteProjectByIdMutation();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      try {
        await deleteProjectById(id).unwrap();
      } catch (error) {
        console.log(error, "form delete porject");
        toast.error(error?.data?.message, { id: "8y0da986f09bf" });
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (deleteIsLoading) {
    return <Spinner />;
  }

  const redirectUpdatePage = (id) => {
    navigate(`/dashboard/updateProject/${id}`);
  };

  const projects = data?.data || [];

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>
        Manage Projects
      </h1>
      <section className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-t bg-slate-100 text-left">
              <th className="px-4 py-7 border-b">No</th>
              <th className="px-4 py-7 border-b">Image</th>
              <th className="px-4 py-7 border-b"> Name</th>
              <th className="px-4 py-7 border-b">Posted</th>
              <th className="px-4 py-7 border-b">Updated</th>
              <th className="px-4 py-7 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.length > 0 ? (
              projects?.map((project, index) => (
                <tr key={project._id} className="hover:bg-gray-100">
                  <td className="px-4 py-7 border-b">{index + 1}</td>
                  <td className="px-4 py-7 border-b">
                    <img
                      src={project?.thumbnailImg}
                      alt={project?.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-7 border-b">{project?.name}</td>
                  <td className="px-4 py-7 border-b">{project?.createdAt}</td>
                  <td className="px-4 py-7 border-b">{project?.updatedAt}</td>
                  <td className="px-4 py-7 border-b">
                    <button
                      onClick={() => redirectUpdatePage(project?._id)}
                      className="mr-2 px-4 py-1 bg-black text-white rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(project?._id)}
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
                  No project available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default ManageProjects;
