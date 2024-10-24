import { baseApi } from "../../api/baseApi";


const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postBlog: builder.mutation({
            query: (data) => ({
                url: "/blog/post-blog",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["blogs"]
        }),
        updateBlog: builder.mutation({
            query: ({ id, data }) => ({
                url: `/blog/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["blogs"]
        }),
        getBlogs: builder.query({
            query: () => ({
                url: "/blog",
                method: "GET"
            }),
            providesTags: ["blogs"]
        }),
        getBlogById: builder.query({
            query: (id) => ({
                url: `/blog/${id}`,
                method: "GET"
            }),
            providesTags: ["blogs"]
        }),
        deleteBlogById: builder.mutation({
            query: (id) => ({
                url: `/blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blogs"]
        })
    })
});



export const {
    useGetBlogByIdQuery,
    useGetBlogsQuery,
    useUpdateBlogMutation,
    usePostBlogMutation,
    useDeleteBlogByIdMutation
} = blogApi;