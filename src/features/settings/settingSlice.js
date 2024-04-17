import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAPlatform, addHomepageHeadingTitle, deleteAPlatform, fetchAllPlatforms, fetchHomepageHeadingTitle, updateAPlatform, updateHomepageHeadingTitle, } from "./settingAPI";

const initialState = {
    title: [],
    platFormsData: [],
    isLoading: false,
    updateSuccess: false,
    postSuccess: false,
    isError: false,
    deleteSuccess: false,
    error: ""
};

// homepage heading title thunk start here  ======================================>

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

// homepage heading title thunk end here ========================================//>


// social platform CRUD start here =============================================>
export const myAllSocialPlatforms = createAsyncThunk("socialPlatform/allPlatforms",
    async () => {
        const allPlatforms = fetchAllPlatforms();
        return allPlatforms;
    }
);

export const addASocialPlatform = createAsyncThunk("socialPlatform/addPlatform",
    async (data) => {
        const res = addAPlatform(data);
        return res;
    }
);

export const updateASocialPlatform = createAsyncThunk("socialPlatform/updatePlatform",
    async (id, data) => {
        const res = updateAPlatform(id, data);
        return res;
    }
);

export const deleteASocialPlatform = createAsyncThunk("socialPlatform/deletePlatform",
    async (id) => {
        const res = deleteAPlatform(id);
        return res;
    }
);

// social platform CRUD end here =================================================//>


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
        builder.addCase(myAllSocialPlatforms.pending, (state) => {
            state.isLoading = true
            state.platFormsData = []
        });
        builder.addCase(myAllSocialPlatforms.fulfilled, (state, action) => {
            state.isLoading = false
            state.platFormsData = action.payload,
                state.isError = false;
        });
        builder.addCase(myAllSocialPlatforms.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true;
            state.error = action.error.message
        });
    }
});


export default settingsSlice.reducer;