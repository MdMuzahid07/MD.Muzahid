import { baseApi } from "../../api/baseApi";



const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (data) => ({
                url: "/project/create-project",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["projects"]
        }),
        updateProject: builder.mutation({
            query: (id, data) => ({
                url: `/project/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["projects"]
        }),
        getAllProjects: builder.query({
            query: () => ({
                url: "/project",
                method: "GET"
            }),
            providesTags: ["projects"]
        }),
        getProjectById: builder.query({
            query: (id) => ({
                url: `/project/${id}`,
                method: "GET"
            }),
            providesTags: ["projects"]
        }),
        deleteProjectById: builder.query({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: "DELETE",
            }),
            providesTags: ["projects"]
        })
    })
});



export const {
    useCreateProjectMutation,
    useGetAllProjectsQuery,
    useGetProjectByIdQuery,
    useDeleteProjectByIdQuery
} = projectApi;