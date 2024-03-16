import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProjectsData,
  updateAProject,
} from "../../features/projects/projectSlice";
import useImgBBUpload from "../../hooks/useImgBBUpload";
import { addProjectStyles } from "../../styles";
import AddProductForm from "../../components/ui/dashboard/AddProductForm";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
  const [coreTechs, setCoreTechs] = useState([]);
  const [allUsedTechs, setAllUsedTechs] = useState([]);
  const { ID } = useParams();
  const { getEvent, img } = useImgBBUpload();
  const { getEvent: f_1, img: f_1_img } = useImgBBUpload();
  const { getEvent: f_2, img: f_2_img } = useImgBBUpload();
  const { getEvent: f_3, img: f_3_img } = useImgBBUpload();

  const { isLoading, projectUpdated, isError, error, projects } = useSelector(
    (state) => state.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading && !projectUpdated && !projects) {
      toast.loading("Updating...", {
        id: "project update",
        style: {
          borderRadius: "0px",
          background: "#0C0C0C",
          color: "#fff",
          fontSize: "30px",
          padding: "10px 20px",
        },
      });
    }
    if (!isLoading && projectUpdated) {
      toast.success("Success", {
        id: "project update",
        style: {
          borderRadius: "0px",
          background: "#0C0C0C",
          color: "#fff",
          fontSize: "30px",
          padding: "10px 20px",
        },
      });
    }
    if (!projectUpdated && isError) {
      toast.error(error, {
        id: "project update",
        style: {
          borderRadius: "0px",
          background: "#0C0C0C",
          color: "#fff",
          fontSize: "30px",
          padding: "10px 20px",
        },
      });
    }
  }, [isLoading, isError, projectUpdated, error, projects]);

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
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

    dispatch(updateAProject(ID, data));
  };

  const handleOnChangeCoreTechs = (event) => {
    const techs = [...coreTechs, event.target.value];
    setCoreTechs(techs);
  };

  const handleOnChangeAllUsedTechs = (event) => {
    const techs = [...allUsedTechs, event.target.value];
    setAllUsedTechs(techs);
  };

  const currentData = projects?.find((project) => project?._id === ID);

  return (
    <>
      <h1 className={`${addProjectStyles.headingText} mt-14`}>
        Update Project
      </h1>
      <AddProductForm
        currentData={currentData}
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
    </>
  );
};

export default UpdateProject;
