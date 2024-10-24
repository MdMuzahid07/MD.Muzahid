import { useState } from "react";
import toast from "react-hot-toast";
import useImgBBUpload from "../../hooks/useImgBBUpload";
import { addProjectStyles, styles } from "../../styles";
import AddProjectForm from "../../components/ui/dashboard/AddProjectForm";
import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
} from "../../redux/features/project/projectApi";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
  const { updateId } = useParams();
  const [coreTechs, setCoreTechs] = useState([]);
  const [allUsedTechs, setAllUsedTechs] = useState([]);
  const { getEvent: f_1, img: f_1_img } = useImgBBUpload();
  const { getEvent: f_2, img: f_2_img } = useImgBBUpload();
  const { getEvent: f_3, img: f_3_img } = useImgBBUpload();
  const [file, setFile] = useState(null);
  const [updateProject, { isLoading, data }] = useUpdateProjectMutation();
  const { data: project } = useGetProjectByIdQuery(updateId);

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

    // Remove empty strings, arrays, and objects start ================?

    const updateData = {};

    for (const key in projectData) {
      if (Object.hasOwn(projectData, key)) {
        const value = projectData[key];

        if (
          (typeof value === "string" && value.trim() !== "") || // Keep non-empty strings
          (Array.isArray(value) && value.length > 0) || // Keep non-empty arrays
          (typeof value === "object" &&
            Object.keys(value).some((innerKey) => {
              const innerValue = value[innerKey];
              return (
                (typeof innerValue === "string" && innerValue.trim() !== "") ||
                (Array.isArray(innerValue) && innerValue.length > 0)
              );
            })) // Keep non-empty objects
        ) {
          updateData[key] = value;
        }
      }
    }

    // Remove empty strings, arrays, and objects end ================?

    const projectFormData = new FormData();
    if (projectData) {
      projectFormData.append("data", JSON.stringify(updateData));
    }
    if (file) {
      projectFormData.append("image", file);
    }

    try {
      console.log(projectFormData.get("data"));
      console.log(projectFormData.get("image"));

      await updateProject({ id: updateId, data: projectFormData }).unwrap();
    } catch (error) {
      console.log(error);
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

  const currentData = project?.data || [];

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-32`}>
      <h1 className={`${addProjectStyles.headingText}`}>Update Project</h1>
      <AddProjectForm
        currentData={currentData}
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

export default UpdateProject;
