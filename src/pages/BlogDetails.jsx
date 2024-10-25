import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../redux/features/blog/blogApi";
import { styles } from "../styles";
import ReactQuill from "react-quill"; // If you're using react-quill for rendering rich text
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import Spinner from "../components/preloader/Spinner";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useGetBlogByIdQuery(id);

  const { title, texts, thumbnail } = blog?.data || {};

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <section className="relative w-full h-[500px]">
        <img
          src={thumbnail || "https://via.placeholder.com/1500x500"}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {title || "Blog Title"}
          </h1>
        </div>
      </section>

      <section
        className={`${styles.paddingX} stripeBG text-slate-300 pt-10 min-h-screen`}
      >
        <section className="bg-primary h-screen p-8 rounded-full opacity-50 backdrop-blur-sm">
          <section className="max-w-screen-lg mx-auto">
            {/* {category && (
            <span className="inline-block bg-blue-200 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full uppercase mb-6">
              {category}
            </span>
          )} */}
            <article className="prose prose-lg prose-invert max-w-none text-xl">
              <ReactQuill value={texts || ""} readOnly={true} theme="bubble" />
            </article>
          </section>
        </section>
      </section>
    </section>
  );
};

export default BlogDetails;
