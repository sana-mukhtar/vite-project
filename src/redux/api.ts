import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[],string>({
      query: () => "post",
    }),
    newPosts : builder.mutation<Post , Post>({
      query: (post)=>({
        url:"post",
        method:"POST",
        body:post
      })
    }),
  }),
});

export const {useGetPostsQuery} = myApi