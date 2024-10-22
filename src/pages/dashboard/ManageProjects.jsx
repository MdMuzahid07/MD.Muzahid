import Card from "../../components/dashboard/manageProjects/Card";
import { addProjectStyles, styles } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProjectsData } from "../../features/projects/projectSlice";
import Spinner from "../../components/preloader/Spinner";

const ManageProjects = () => {
  const { projects, isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projects]);

  if (isLoading) {
    return <Spinner />;
  }

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
