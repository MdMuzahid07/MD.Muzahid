import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addHomepageHeadingTitle, fetchHomepageHeadingTitle, updateHomepageHeadingTitle, } from "./settingAPI";

const initialState = {
    title: [],
    isLoading: false,
    updateSuccess: false,
    postSuccess: false,
    isError: false,
    error: ""
};

// homepage heading title thunk start here 

export const fetchHeadingTitleData = createAsyncThunk("headingTitle/getTitle",
    async () => {
        const title = await fetchHomepageHeadingTitle();
        return title;
    });

export const addHeadingTitle = createAsyncThunk("headingTitle/addTitle",
    async (data) => {
        const project = await addHomepageHeadingTitle(data);
        return project;
    });

export const updateTitle = createAsyncThunk("headingTitle/updateTitle",
    async (id, data) => {
        const res = await updateHomepageHeadingTitle(id, data);
        return res;
    })

// homepage heading title thunk end here 


const settingsSlice = createSlice({
    initialState,
    name: "settings",
    extraReducers: (builder) => {
        builder.addCase(fetchHeadingTitleData.pending, (state) => {
            state.isLoading = true,
                state.title = [],
                state.isError = false
        });
        builder.addCase(fetchHeadingTitleData.fulfilled, (state, action) => {
            state.isLoading = false,
                state.title = action.payload,
                state.isError = false
        });
        builder.addCase(fetchHeadingTitleData.rejected, (state, action) => {
            state.isError = true,
                state.error = action.error.message;
        });
        builder.addCase(addHeadingTitle.pending, (state) => {
            state.isLoading = true,
                state.postSuccess = false,
                state.isError = false
        });
        builder.addCase(addHeadingTitle.fulfilled, (state) => {
            state.isLoading = false,
                state.postSuccess = true
        });
        builder.addCase(addHeadingTitle.rejected, (state, action) => {
            state.isLoading = false,
                state.isError = true,
                state.postSuccess = false,
                state.error = action.error.message
        });
        builder.addCase(updateTitle.pending, (state) => {
            state.updateSuccess = false,
                state.isError = false
            state.isLoading = true

        });
        builder.addCase(updateTitle.fulfilled, (state) => {
            state.isLoading = false
            state.updateSuccess = true,
                state.isError = false
        });
        builder.addCase(updateTitle.rejected, (state, action) => {
            state.updateSuccess = false,
                state.isError = true,
                state.isLoading = false,
                state.error = action.error.message
        });
    }
});


export default settingsSlice.reducer;