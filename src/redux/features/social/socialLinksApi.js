import { baseApi } from "../../api/baseApi";


const socialLinksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addSocialLink: builder.mutation({
            query: ({ data }) => ({
                url: "/social/add-social-link",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["socialUrl"]
        }),
        updateSocialLink: builder.mutation({
            query: ({ id, data }) => ({
                url: `/social/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["socialUrl"]
        }),
        getAllSocialLinks: builder.query({
            query: () => ({
                url: "/social",
                method: "GET"
            }),
            providesTags: ["socialUrl"]
        }),
        getSocialLinkById: builder.query({
            query: (id) => ({
                url: `/social/${id}`,
                method: "GET"
            }),
            providesTags: ["socialUrl"]
        }),
        deleteSocialLinkById: builder.mutation({
            query: (id) => ({
                url: `/social/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["socialUrl"]
        })
    })
});



export const {
    useAddSocialLinkMutation,
    useGetAllSocialLinksQuery,
    useGetSocialLinkByIdQuery,
    useUpdateSocialLinkMutation,
    useDeleteSocialLinkByIdMutation
} = socialLinksApi;