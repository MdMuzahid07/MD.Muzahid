/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const handleRead = (id) => {
    navigate(`/blogDetails/${id}`);
  };

  return (
    <section className="hover:-translate-y-6 hover:scale-105 transition-all  hover:shadow-xl hover:shadow-pink-500 bg-primary min-h-[400px] border-2 border-purple-400 rounded-2xl overflow-hidden shadow duration-300 shadow-secondary relative">
      <img
        className="w-full h-52 object-cover brightness-75"
        src={
          blog?.thumbnail
            ? blog?.thumbnail
            : "https://i.ibb.co.com/dkvKCWY/1.png"
        }
        alt="Blog Thumbnail"
      />

      <section className="p-6">
        <span className="inline-block bg-slate-300 text-primary text-xs font-semibold px-2 py-1 rounded-full uppercase mb-2">
          MERN
        </span>
        <h2 className="text-white font-bold text-xl mb-2">title</h2>
      </section>

      <section className="absolute bottom-6 left-6">
        <button
          onClick={() => handleRead(blog?._id)}
          className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-500 hover:to-orange-400 text-2xl px-4 rounded-full text-slate-300 font-bold flex items-center gap-2"
        >
          Read More{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </span>
        </button>
      </section>
    </section>
  );
};

export default BlogCard;
