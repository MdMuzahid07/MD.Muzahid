import { useState } from "react";
import { useUpdateBlogMutation } from "../../../redux/features/blog/blogApi";
import { addProjectStyles, styles } from "../../../styles";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";

const DashboardUpdateBlog = () => {
  const { blogId } = useParams();
  const [value, setValue] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [updateBlog, { data, error, isLoading: loading }] =
    useUpdateBlogMutation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setImagePreview(null);
    }
  };

  const handleTitleChange = (e) => {
    setBlogTitle(e.target.value);
  };

  if (loading) {
    toast.loading("Saving...", { id: "updateBlogToastId" });
  }
  if (error) {
    toast.error(error?.data?.message, { id: "updateBlogToastId" });
  }
  if (data && data?.success) {
    toast.success("Saved", { id: "updateBlogToastId" });
  }

  const handleSave = async () => {
    const blogData = new FormData();
    if (selectedFile) {
      blogData.append("thumbnail", selectedFile);
    }
    if (blogTitle) {
      blogData.append("title", blogTitle);
    }
    if (value) {
      blogData.append("texts", value);
    }

    try {
      await updateBlog({ id: blogId, data: blogData });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "An error occurred. Please try again.",
        { id: "updateBlogToastId" }
      );
    }
  };
  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-32`}>
      <h1 className={`${addProjectStyles.headingText}`}>Update Blog</h1>
      <section>
        <section className="mt-10">
          {imagePreview && (
            <section className="mb-4">
              <img
                src={imagePreview}
                alt="Selected thumbnail preview"
                className="w-full h-[50vh] rounded-2xl shadow-xl object-cover"
              />
            </section>
          )}

          <section className="mb-10">
            <label className={addProjectStyles.labelText} htmlFor="blogTitle">
              Write the title of your blog
            </label>
            <input
              className={addProjectStyles.inputStyle}
              type="text"
              name="blogTitle"
              placeholder="Write blog title"
              id="blogTitle"
              value={blogTitle}
              onChange={handleTitleChange}
            />
          </section>

          <section className="mb-10">
            <label
              className={addProjectStyles.labelText}
              htmlFor="blogThumbnail"
            >
              Select Blog Thumbnail
            </label>
            <input
              onChange={handleFileChange}
              className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
              type="file"
              id="blogThumbnail"
              name="blogThumbnail"
            />
            {selectedFile && (
              <p className="mt-2">Selected file: {selectedFile.name}</p>
            )}
          </section>

          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="mb-6 h-[50vh] bg-slate-50 rounded-2xl overflow-hidden border-2 border-black"
            placeholder="Write about awesome technologies"
          />

          {/* Word and Character Count */}
          <div className="flex justify-between mb-6 px-4 text-gray-600">
            <span>Word Count: {value.split(/\s+/).filter(Boolean).length}</span>
            <span>
              Character Count: {value.replace(/<\/?[^>]+(>|$)/g, "").length}
            </span>
          </div>

          <section className="flex justify-end pr-20 pt-10">
            <button
              onClick={handleSave}
              disabled={loading}
              className={`relative w-28 h-28 flex justify-center items-center border rounded-full transition text-2xl ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "hover:bg-black hover:text-slate-300"
              }`}
            >
              {loading ? "Saving..." : "Post"}
              <span className="absolute -right-10 -top-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </svg>
              </span>
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default DashboardUpdateBlog;
