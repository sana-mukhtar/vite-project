import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["PostTag"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => "post",
      providesTags: ["PostTag"],
    }),

    newPosts: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "post",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["PostTag"],
    }),
  }),
});

export const { useGetPostsQuery, useNewPostsMutation } = myApi;
