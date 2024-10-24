import { baseApi } from "../../api/baseApi";



const skillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addSkill: builder.mutation({
            query: ({ data }) => ({
                url: "/skill/add-skill",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["skills"]
        }),
        updateSkill: builder.mutation({
            query: ({ id, data }) => ({
                url: `/skill/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["skills"]
        }),
        getAllSkills: builder.query({
            query: () => ({
                url: "/skill",
                method: "GET"
            }),
            providesTags: ["skills"]
        }),
        getSkillById: builder.query({
            query: (id) => ({
                url: `/skill/${id}`,
                method: "GET"
            }),
            providesTags: ["skills"]
        }),
        deleteSkillById: builder.mutation({
            query: (id) => ({
                url: `/skill/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["skills"]
        })
    })
});



export const {
    useAddSkillMutation,
    useDeleteSkillByIdMutation,
    useGetAllSkillsQuery,
    useGetSkillByIdQuery,
    useUpdateSkillMutation
} = skillApi;