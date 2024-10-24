import { baseApi } from "../../api/baseApi";


const educationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addEducation: builder.mutation({
            query: (data) => ({
                url: "/education/add-education",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["education"]
        }),
        updateEduction: builder.mutation({
            query: ({ id, data }) => ({
                url: `/education/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["education"]
        }),
        getEducation: builder.query({
            query: () => ({
                url: "/education",
                method: "GET"
            }),
            providesTags: ["education"]
        }),
        getEducationById: builder.query({
            query: (id) => ({
                url: `/education/${id}`,
                method: "GET"
            }),
            providesTags: ["education"]
        }),
        deleteEducationById: builder.mutation({
            query: (id) => ({
                url: `/education/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["education"]
        })
    })
});



export const {
    useAddEducationMutation,
    useGetEducationByIdQuery,
    useGetEducationQuery,
    useUpdateEductionMutation,
    useDeleteEducationByIdMutation
} = educationApi;