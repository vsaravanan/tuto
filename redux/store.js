// redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '@/redux/postSlice'
import statusReducer from '@/redux/statusoSlice'
import utilReducer from '@/redux/utilSlice'
import { apiPosts } from '@/features/api/apiPosts' // Import the postsApi object
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [thunk]

const environment = process.env.NODE_ENV
console.log(environment)

if (environment === 'development') {
  middlewares.push(logger)
}

const initialState = {}

export const store = configureStore(
  {
    reducer: {
      posts: postsReducer,
      statuso: statusReducer,
      content: utilReducer,
      [apiPosts.reducerPath]: apiPosts.reducer, // from createApi, fetchBaseQuery, useGetPostsQuery
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiPosts.middleware),
    // Add the RTK-Query middleware
  },
  initialState,
)
