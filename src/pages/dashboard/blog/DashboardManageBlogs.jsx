import { addProjectStyles, styles } from "../../../styles";

const blogs = [
  {
    _id: "671939f4e33e35ea1051f2ce",
    title: "The Wonders of Nature",
    thumbnail:
      "https://res.cloudinary.com/dymo0iyee/image/upload/v1729706484/xzjrilbhsezapfhp8cu0.png",
    texts: `
      <h1>The Wonders of Nature</h1>
      <p>Nature is full of incredible phenomena that inspire awe and wonder. From towering mountains to vast oceans, every aspect of nature has its own story.</p>
      <h2>Mountains</h2>
      <p>Mountains are not only beautiful but also play a crucial role in the ecosystem. They affect weather patterns and house diverse flora and fauna.</p>
      <h2>Oceans</h2>
      <p>The oceans cover more than 70% of the Earth's surface and are essential for life. They regulate climate and are home to countless species.</p>
      <h2>Forests</h2>
      <p>Forests are often referred to as the lungs of the planet, producing oxygen and absorbing carbon dioxide. They are vital for biodiversity and the health of our planet.</p>
      <p>In conclusion, exploring nature can lead to a greater appreciation for our environment and the need to protect it.</p>
    `,
  },
  {
    _id: "67193a1b47e33f3aa15023dc",
    title: "Technological Innovations of 2024",
    thumbnail:
      "https://res.cloudinary.com/dymo0iyee/image/upload/v1729706484/xzjrilbhsezapfhp8cu1.png",
    texts: `
      <h1>Technological Innovations of 2024</h1>
      <p>The year 2024 has witnessed some of the most groundbreaking advancements in technology. From AI-driven solutions to advancements in quantum computing, the tech landscape is rapidly evolving.</p>
      <h2>Artificial Intelligence</h2>
      <p>AI continues to be at the forefront of innovation, revolutionizing industries such as healthcare, education, and finance.</p>
      <h2>Quantum Computing</h2>
      <p>Quantum computing is pushing the boundaries of computational power, solving problems that were previously thought to be unsolvable.</p>
    `,
  },
];

const DashboardManageBlogs = () => {
  const handleDelete = (_id) => {
    console.log(`Delete blog with id: ${_id}`);
  };

  const handleUpdate = (id) => {
    console.log("Update blog: ", id);
  };

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
            {blogs?.length > 0 ? (
              blogs?.map((blog, index) => (
                <tr key={blog._id} className="hover:bg-gray-100">
                  <td className="px-4 py-7 border-b">{index + 1}</td>
                  <td className="px-4 py-7 border-b">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-7 border-b">{blog.title}</td>
                  <td className="px-4 py-7 border-b">
                    <button
                      onClick={() => handleUpdate(blog)}
                      className="mr-2 px-4 py-1 bg-black text-white rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
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
