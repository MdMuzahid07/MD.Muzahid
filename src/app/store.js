
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projects/projectSlice";
const store = configureStore({
    reducer: {
        projects: projectSlice
    }
});

export default store;