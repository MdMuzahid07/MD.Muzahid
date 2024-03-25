import axios from "../../utils/axios.config";

const fetchProjects = async () => {
    try {
        const data = await axios.get("/api/v1/projects");
        return data.data.data;
    } catch (error) {
        console.log(error, "error message from fetchProjects API");
    }
};

const addProject = async (projectData) => {
    try {
        await axios.post("/api/v1/projects", projectData);
    } catch (error) {
        console.log(error, "error message from addProject API");
    }
};

const updateProjectById = async (id, data) => {
    try {
        const res = await axios.patch(`/api/v1/projects/${id}`, data);
        console.log(res, "from project update");
    } catch (error) {
        console.log(error, "error message from updateProjectById API");
    }
};

const deleteProjectById = async (id) => {
    try {
        await axios.delete(`/api/v1/projects/${id}`);
    } catch (error) {
        console.log(error, "error message from deleteProjectByID API");
    }
};

export { fetchProjects, addProject, deleteProjectById, updateProjectById };


