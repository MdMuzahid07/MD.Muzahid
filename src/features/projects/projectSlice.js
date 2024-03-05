import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProject, fetchProjects } from "./projectAPI";

const initialState = {
    projects: [],
    isLoading: false,
    postSuccess: false,
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
    }
});


export default projectSlice.reducer;