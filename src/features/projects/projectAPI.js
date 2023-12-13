import axios from "../../utils/axios.config";

const fetchProjects = async () => {
    const data = await axios.get("/api/v1/projects");
    return data.data.data;
};

export default fetchProjects;