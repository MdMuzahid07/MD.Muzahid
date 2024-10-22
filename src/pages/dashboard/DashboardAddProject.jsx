import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { postProjectData } from "../../features/projects/projectSlice";
import useImgBBUpload from "../../hooks/useImgBBUpload";
import { addProjectStyles, styles } from "../../styles";
import AddProjectForm from "../../components/ui/dashboard/AddProjectForm";

const DashboardAddProject = () => {
  const [coreTechs, setCoreTechs] = useState([]);
  const [allUsedTechs, setAllUsedTechs] = useState([]);
  const { getEvent, img } = useImgBBUpload();
  const { getEvent: f_1, img: f_1_img } = useImgBBUpload();
  const { getEvent: f_2, img: f_2_img } = useImgBBUpload();
  const { getEvent: f_3, img: f_3_img } = useImgBBUpload();

  const { isLoading, postSuccess, isError, error } = useSelector(
    (state) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading && !postSuccess) {
      toast.loading("Posting...", {
        id: "project added",
        style: {
          borderRadius: "0px",
          background: "#0C0C0C",
          color: "#fff",
          fontSize: "30px",
          padding: "10px 20px",
        },
      });
    }
    if (!isLoading && postSuccess) {
      toast.success("Success", {
        id: "project added",
        style: {
          borderRadius: "0px",
          background: "#0C0C0C",
          color: "#fff",
          fontSize: "30px",
          padding: "10px 20px",
        },
      });
    }
    if (!postSuccess && isError) {
      toast.error(error, {
        id: "project added",
        style: {
          borderRadius: "0px",
          background: "#0C0C0C",
          color: "#fff",
          fontSize: "30px",
          padding: "10px 20px",
        },
      });
    }
  }, [isLoading, isError, postSuccess, error]);

  const handleForm = (e) => {
    e.preventDefault();

    const projectData = {
      name: e.target.projectName.value,
      coreTechs: coreTechs,
      usedTechnologies: allUsedTechs,
      thumbnailImg: img,
      feature_1: {
        heading: e.target.f1_heading.value,
        detail: e.target.f1_details.value,
        image: f_1_img,
      },
      feature_2: {
        heading: e.target.f2_heading.value,
        detail: e.target.f2_details.value,
        image: f_2_img,
      },
      feature_3: {
        heading: e.target.f3_heading.value,
        detail: e.target.f3_details.value,
        image: f_3_img,
      },
      projectYear: e.target.projectYear.value,
      live_url: e.target.liveUrl.value,
      source: {
        server: e.target.serverUrl.value,
        client: e.target.clientUrl.value,
      },
    };
    dispatch(postProjectData(projectData));
  };

  const handleOnChangeCoreTechs = (event) => {
    const techs = [...coreTechs, event.target.value];
    setCoreTechs(techs);
  };

  const handleOnChangeAllUsedTechs = (event) => {
    const techs = [...allUsedTechs, event.target.value];
    setAllUsedTechs(techs);
  };

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-32`}>
      <h1 className={`${addProjectStyles.headingText}`}>Add Project</h1>
      <AddProjectForm
        handleForm={handleForm}
        handleOnChangeCoreTechs={handleOnChangeCoreTechs}
        handleOnChangeAllUsedTechs={handleOnChangeAllUsedTechs}
        getEvent={getEvent}
        allUsedTechs={allUsedTechs}
        coreTechs={coreTechs}
        f_1={f_1}
        f_2={f_2}
        f_3={f_3}
      />
    </section>
  );
};

export default DashboardAddProject;
