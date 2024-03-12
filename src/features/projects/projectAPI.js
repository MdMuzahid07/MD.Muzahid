import axios from "../../utils/axios.config";

const fetchProjects = async () => {
    const data = await axios.get("/api/v1/projects");
    return data.data.data;
};


const addProject = async (projectData) => {
    await axios.post("/api/v1/projects", projectData);
}


export { fetchProjects, addProject };


