import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useImgBBUpload from "../../hooks/useImgBBUpload";
import { addProjectStyles } from "../../styles";
import { useParams } from "react-router-dom";
import UpdateProjectForm from "../../components/ui/dashboard/UpdateProjectForm";
import { useGetProjectByIdQuery } from "../../redux/features/project/projectApi";

const UpdateProject = () => {
  const [coreTechs, setCoreTechs] = useState([]);
  const [allUsedTechs, setAllUsedTechs] = useState([]);
  const { updateId } = useParams();
  const { getEvent, img } = useImgBBUpload();
  const { getEvent: f_1, img: f_1_img } = useImgBBUpload();
  const { getEvent: f_2, img: f_2_img } = useImgBBUpload();
  const { getEvent: f_3, img: f_3_img } = useImgBBUpload();
  const {
    data: currentData,
    error,
    isLoading,
  } = useGetProjectByIdQuery(updateId);

  const handleForm = (e) => {
    e.preventDefault();
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
    <>
      <h1 className={`${addProjectStyles.headingText} mt-14`}>
        Update Project
      </h1>
      <UpdateProjectForm
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
