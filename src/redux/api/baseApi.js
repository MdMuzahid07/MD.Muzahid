import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/` }),
    credentials: "include",
    tagTypes: [
        "projects",
        "profile",
        "education",
        "skills",
        "courses",
        "hobby",
        "socialUrl",
        "blogs",
        "experience"
    ],
    endpoints: () => ({}),
});

