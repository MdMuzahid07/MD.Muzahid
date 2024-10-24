import { baseApi } from "../../api/baseApi";



const hobbyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addHobby: builder.mutation({
            query: ({ data }) => ({
                url: "/hobby/add-hobby",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["hobby"]
        }),
        updateHobby: builder.mutation({
            query: ({ id, data }) => ({
                url: `/hobby/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["hobby"]
        }),
        getAllHobby: builder.query({
            query: () => ({
                url: "/hobby",
                method: "GET"
            }),
            providesTags: ["hobby"]
        }),
        getHobbyById: builder.query({
            query: (id) => ({
                url: `/hobby/${id}`,
                method: "GET"
            }),
            providesTags: ["hobby"]
        }),
        deleteHobbyById: builder.mutation({
            query: (id) => ({
                url: `/hobby/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["hobby"]
        })
    })
});



export const {
    useAddHobbyMutation,
    useDeleteHobbyByIdMutation,
    useGetAllHobbyQuery,
    useGetHobbyByIdQuery,
    useUpdateHobbyMutation
} = hobbyApi;