// api/postsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseUrl = 'https://jsonplaceholder.typicaode.com'
const baseUrl = 'http://localhost:4000'

export const apiPosts = createApi({
  reducerPath: 'api', // by default api. it should unique if you call many createApi
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post'],
    }),
    createPost: builder.mutation({
      query: post => ({
        url: 'post',
        method: 'POST',
        body: post,
      }),
    }),
  }),
})

export const { useGetPostsQuery, useCreatePostMutation } = apiPosts
