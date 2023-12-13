import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchProjects from "./projectAPI";

const initialState = {
    projects: [],
    isLoading: false,
    isError: false,
    error: ""
};

export const fetchProjectsData = createAsyncThunk("projects/projectsData", async () => {
    const projects = fetchProjects();
    return projects;
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
        })
    }
});


export default projectSlice.reducer;