import { baseApi } from "../../api/baseApi";


const experienceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addExperience: builder.mutation({
            query: (data) => ({
                url: "/experience/add-experience",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["experience"]
        }),
        updateExperience: builder.mutation({
            query: ({ id, data }) => ({
                url: `/experience/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["experience"]
        }),
        getExperience: builder.query({
            query: () => ({
                url: "/experience",
                method: "GET"
            }),
            providesTags: ["experience"]
        }),
        getExperienceById: builder.query({
            query: (id) => ({
                url: `/experience/${id}`,
                method: "GET"
            }),
            providesTags: ["experience"]
        }),
        deleteExperienceById: builder.mutation({
            query: (id) => ({
                url: `/experience/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["experience"]
        })
    })
});


export const {
    useAddExperienceMutation,
    useGetExperienceByIdQuery,
    useGetExperienceQuery,
    useUpdateExperienceMutation,
    useDeleteExperienceByIdMutation
} = experienceApi;