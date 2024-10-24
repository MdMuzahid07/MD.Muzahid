import Card from "../../components/dashboard/manageProjects/Card";
import { addProjectStyles, styles } from "../../styles";
import Spinner from "../../components/preloader/Spinner";
import { useGetAllProjectsQuery } from "../../redux/features/project/projectApi";

const ManageProjects = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  if (isLoading) {
    return <Spinner />;
  }

  const projects = data?.data || [];

  return (
    <main className={`${styles.dashboardPageCardBgWhiteOpacity}`}>
      <h1 className={`${addProjectStyles.headingText}`}>Manage Projects</h1>
      <section className="mt-10 grid lg:grid-cols-2 gap-10">
        {projects?.map((project) => {
          return <Card key={project?._id} project={project} />;
        })}
      </section>
    </main>
  );
};

export default ManageProjects;
