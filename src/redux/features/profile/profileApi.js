import { baseApi } from "../../api/baseApi";



const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: ({ id, data }) => ({
                url: `/profile/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["profile"]
        }),
        getProfile: builder.query({
            query: () => ({
                url: `/profile`,
                method: "GET",
            }),
            invalidatesTags: ["profile"]
        })
    })
});



export const {
    useUpdateProfileMutation,
    useGetProfileQuery
} = profileApi;


