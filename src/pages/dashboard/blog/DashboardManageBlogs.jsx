import toast from "react-hot-toast";
import {
  useDeleteBlogByIdMutation,
  useGetBlogsQuery,
} from "../../../redux/features/blog/blogApi";
import { addProjectStyles, styles } from "../../../styles";
import { useNavigate } from "react-router-dom";

const DashboardManageBlogs = () => {
  const navigate = useNavigate();
  const { data: blogs } = useGetBlogsQuery();
  const [deleteBlogById, { data, error, isLoading }] =
    useDeleteBlogByIdMutation();

  const handleDelete = (id) => {
    const proceed = window.confirm("delete blog?");
    if (proceed) {
      deleteBlogById(id);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/updateBlog/${id}`);
  };

  if (isLoading) {
    toast.loading("Deleting...", { id: "deleteBlogToastId" });
  }
  if (error) {
    toast.error(error?.data?.message, { id: "deleteBlogToastId" });
  }
  if (data && data?.success) {
    toast.success("Done", { id: "deleteBlogToastId" });
  }

  console.log(blogs);
  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>Manage Blogs</h1>
      <section className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-t bg-slate-100 text-left">
              <th className="px-4 py-7 border-b">No</th>
              <th className="px-4 py-7 border-b">Thumbnail</th>
              <th className="px-4 py-7 border-b">Title</th>
              <th className="px-4 py-7 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.data?.length > 0 ? (
              blogs?.data?.map((blog, index) => (
                <tr key={blog._id} className="hover:bg-gray-100">
                  <td className="px-4 py-7 border-b">{index + 1}</td>
                  <td className="px-4 py-7 border-b">
                    <img
                      src={blog?.thumbnail}
                      alt={blog?.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-7 border-b">{blog?.title}</td>
                  <td className="px-4 py-7 border-b">
                    <button
                      onClick={() => handleUpdate(blog)}
                      className="mr-2 px-4 py-1 bg-black text-white rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(blog?._id)}
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
                  colSpan="3"
                  className="px-4 py-7 text-xl text-red-500 text-center border-b"
                >
                  No blogs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default DashboardManageBlogs;
