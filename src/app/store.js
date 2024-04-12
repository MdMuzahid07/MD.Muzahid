
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projects/projectSlice";
import settingsSlice from "../features/settings/settingSlice";

const store = configureStore({
    reducer: {
        projects: projectSlice,
        settings: settingsSlice
    }
});

export default store;