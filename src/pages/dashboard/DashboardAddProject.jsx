import { useState } from "react";
import toast from "react-hot-toast";
import useImgBBUpload from "../../hooks/useImgBBUpload";
import { addProjectStyles, styles } from "../../styles";
import AddProjectForm from "../../components/ui/dashboard/AddProjectForm";
import { useCreateProjectMutation } from "../../redux/features/project/projectApi";

const DashboardAddProject = () => {
  const [coreTechs, setCoreTechs] = useState([]);
  const [allUsedTechs, setAllUsedTechs] = useState([]);
  const { getEvent: f_1, img: f_1_img } = useImgBBUpload();
  const { getEvent: f_2, img: f_2_img } = useImgBBUpload();
  const { getEvent: f_3, img: f_3_img } = useImgBBUpload();
  const [file, setFile] = useState(null > null);
  const [createProject, { isLoading, data }] = useCreateProjectMutation();

  if (isLoading) {
    toast.loading("Working...", { id: "8y0da986f09bf" });
  }

  if (data && data?.success) {
    toast.success("Done...", { id: "8y0da986f09bf" });
  }

  const handleForm = async (e) => {
    e.preventDefault();
    const projectData = {
      name: e.target.projectName.value,
      coreTechs: coreTechs,
      usedTechnologies: allUsedTechs,
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
      projectYear: Number(e.target.projectYear.value),
      live_url: e.target.liveUrl.value,
      source: {
        server: e.target.serverUrl.value,
        client: e.target.clientUrl.value,
      },
    };
    const projectFormData = new FormData();
    if (projectData) {
      projectFormData.append("data", JSON.stringify(projectData));
    }
    if (file) {
      projectFormData.append("image", file);
    }

    try {
      await createProject(projectFormData).unwrap();
    } catch (error) {
      toast.error(error?.data?.message, { id: "8y0da986f09bf" });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
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
        handleFileChange={handleFileChange}
        allUsedTechs={allUsedTechs}
        coreTechs={coreTechs}
        f_1={f_1}
        f_2={f_2}
        f_3={f_3}
        isLoading={isLoading}
      />
    </section>
  );
};

export default DashboardAddProject;
