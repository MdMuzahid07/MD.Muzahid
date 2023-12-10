import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { projectId } = useParams();
  return <div>ProjectDetails: id {projectId}</div>;
};

export default ProjectDetails;
