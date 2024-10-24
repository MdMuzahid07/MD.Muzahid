import { baseApi } from "../../api/baseApi";


const courseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        postCourse: builder.mutation({
            query: (data) => ({
                url: "/courses/add-course",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["courses"]
        }),
        updateCourse: builder.mutation({
            query: ({ id, data }) => ({
                url: `/courses/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["courses"]
        }),
        getCourses: builder.query({
            query: () => ({
                url: "/courses",
                method: "GET"
            }),
            providesTags: ["courses"]
        }),
        getCourseById: builder.query({
            query: (id) => ({
                url: `/courses/${id}`,
                method: "GET"
            }),
            providesTags: ["courses"]
        }),
        deleteCourseById: builder.mutation({
            query: (id) => ({
                url: `/courses/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["courses"]
        })
    })
});



export const {
    usePostCourseMutation,
    useUpdateCourseMutation,
    useGetCourseByIdQuery,
    useGetCoursesQuery,
    useDeleteCourseByIdMutation
} = courseApi;