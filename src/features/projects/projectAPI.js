import axios from "../../utils/axios.config";

const fetchProjects = async () => {
    const data = await axios.get("/api/v1/projects");
    return data.data.data;
};


const addProject = async (projectData) => {
    await axios.post("/api/v1/projects", projectData);
}

const deleteProjectById = async (id) => {
    await axios.delete(`/api/v1/projects/${id}`);
}

export { fetchProjects, addProject, deleteProjectById };


