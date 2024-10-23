import BlogRichTextEditorQuill from "../../../components/dashboard/blog/BlogRichTextEditorQuill";
import { addProjectStyles, styles } from "../../../styles";

const DashboardAddBlog = () => {
  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-32`}>
      <h1 className={`${addProjectStyles.headingText}`}>Write Blog</h1>
      <section>
        <BlogRichTextEditorQuill />
      </section>
    </section>
  );
};

export default DashboardAddBlog;
