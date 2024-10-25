import { useGetBlogsQuery } from "../../redux/features/blog/blogApi";
import { styles } from "../../styles";
import { HR } from "../common/HR";
import ShadowFont from "../common/ShadowFont";
import Spinner from "../preloader/Spinner";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {blogs?.data?.length > 0 && (
        <section id="portfolio" className="w-full  min-h-screen stripeBG">
          <section className={`${styles.paddingX}  text-slate-300  relative`}>
            <section className="max-w-screen-2xl mx-auto  pb-40">
              <ShadowFont>My Blogs</ShadowFont>

              <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {blogs?.data?.slice(0, 4)?.map((blog) => (
                  <BlogCard blog={blog} key={blog?._id} />
                ))}
              </section>
            </section>
            <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mb-20" />
          </section>
        </section>
      )}
    </>
  );
};

export default Blog;
