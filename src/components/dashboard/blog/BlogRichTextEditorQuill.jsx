import { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addProjectStyles } from "../../../styles";
import axios from "axios";

const BlogRichTextEditorQuill = () => {
  const [value, setValue] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle file selection and preview
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

  // Handle title input change
  const handleTitleChange = (e) => {
    setBlogTitle(e.target.value);
  };

  // Save post with validation
  const handleSave = useCallback(async () => {
    if (!blogTitle.trim() || !value.trim()) {
      setError("Both title and content are required!");
      return;
    }

    setError(null); // Clear previous errors
    setLoading(true); // Set loading state
    setSuccess(false); // Reset success state

    const blogData = new FormData();
    if (selectedFile) {
      blogData.append("thumbnail", selectedFile);
    }
    blogData.append("title", blogTitle);
    blogData.append("texts", value);

    console.log(blogData.get("thumbnail")); // Logs the file object or null if no file is selected
    console.log(blogData.get("title")); // Logs the title string
    console.log(blogData.get("texts")); // Logs the editor content string

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/blog/post-blog",
        blogData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", response.data);
      setSuccess(true);
      setValue("");
      setBlogTitle("");
      setSelectedFile(null);
      setImagePreview(null);
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Turn off loading state
    }
  }, [blogTitle, value, selectedFile]);

  return (
    <section className="mt-10">
      {/* Image preview */}
      {imagePreview && (
        <section className="mb-4">
          <img
            src={imagePreview}
            alt="Selected thumbnail preview"
            className="w-full h-[50vh] rounded-2xl shadow-xl object-cover"
          />
        </section>
      )}

      {/* Blog Title Input */}
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
          required
        />
      </section>

      {/* File Input */}
      <section className="mb-10">
        <label className={addProjectStyles.labelText} htmlFor="blogThumbnail">
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

      {/* Rich Text Editor */}
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

      {/* Error Feedback */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Success Feedback */}
      {success && (
        <p className="text-green-600 mb-4">Blog post saved successfully!</p>
      )}

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
  );
};

export default BlogRichTextEditorQuill;
