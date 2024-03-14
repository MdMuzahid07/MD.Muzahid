import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProject, deleteProjectById, fetchProjects, updateProjectById } from "./projectAPI";

const initialState = {
    projects: [],
    isLoading: false,
    postSuccess: false,
    deleteSuccess: false,
    projectUpdated: false,
    isError: false,
    error: ""
};

export const fetchProjectsData = createAsyncThunk("projects/getProjects", async () => {
    const projects = fetchProjects();
    return projects;
});

export const postProjectData = createAsyncThunk("projects/postProject", async (projectData) => {
    const product = addProject(projectData);
    return product;
});

export const deleteAProject = createAsyncThunk("projects/deleteProjectById", async (id) => {
    const response = deleteProjectById(id);
    return response;
});

export const updateAProject = createAsyncThunk("projects/updateProjectById", async (id, data) => {
    const response = updateProjectById(id, data);
    return response;
});

const projectSlice = createSlice({
    initialState,
    name: "projects",
    extraReducers: (builder) => {
        builder.addCase(fetchProjectsData.pending, (state) => {
            state.isLoading = true,
                state.projects = [],
                state.isError = false
        });
        builder.addCase(fetchProjectsData.fulfilled, (state, action) => {
            state.isLoading = false,
                state.projects = action.payload,
                state.isError = false
        });
        builder.addCase(fetchProjectsData.rejected, (state, action) => {
            state.isError = true,
                state.error = action.error.message;
        });
        builder.addCase(postProjectData.pending, (state) => {
            state.isLoading = true,
                state.postSuccess = false,
                state.isError = false
        });
        builder.addCase(postProjectData.fulfilled, (state) => {
            state.isLoading = false,
                state.postSuccess = true
        });
        builder.addCase(postProjectData.rejected, (state, action) => {
            state.isLoading = false,
                state.isError = true,
                state.postSuccess = false,
                state.error = action.error.message
        });
        builder.addCase(deleteAProject.pending, (state) => {
            state.deleteSuccess = false,
                state.isError = false
            state.isLoading = true
        });
        builder.addCase(deleteAProject.fulfilled, (state) => {
            state.deleteSuccess = true,
                state.isLoading = false,
                state.isError = false
        });
        builder.addCase(deleteAProject.rejected, (state, action) => {
            state.deleteSuccess = false,
                state.isError = action.error.message
        });
        builder.addCase(updateAProject.pending, (state) => {
            state.isLoading = true,
                state.projectUpdated = false,
                state.isError = false
        });
        builder.addCase(updateAProject.fulfilled, (state) => {
            state.isLoading = false,
                state.projectUpdated = true,
                state.isError = false
        });
        builder.addCase(updateAProject.rejected, (state, action) => {
            state.isLoading = false,
                state.projectUpdated = false,
                state.isError = true,
                state.error = action.error.message
        });
    }
});


export default projectSlice.reducer;