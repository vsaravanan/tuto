// redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '@/redux/postSlice'
import statusReducer from '@/redux/statusoSlice'
import utilReducer from '@/redux/utilSlice'
import { apiPosts } from '@/features/api/apiPosts' // Import the postsApi object
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const environment = process.env.NEXT_PUBLIC_NODE_ENV
console.log(environment)

const initialState = {}

export const store = configureStore(
  {
    reducer: {
      posts: postsReducer,
      statuso: statusReducer,
      util: utilReducer,
      [apiPosts.reducerPath]: apiPosts.reducer, // from createApi, fetchBaseQuery, useGetPostsQuery
    },
    middleware: getDefaultMiddleware => {
      let tmpMiddleware = getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(thunk)
        .concat(apiPosts.middleware)
      if (environment === 'development') {
        tmpMiddleware = tmpMiddleware.concat(logger)
      }
      return tmpMiddleware
    },
  },
  initialState,
)
