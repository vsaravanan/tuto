// redux/postSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from '@/lib/fetchPosts'
import { setProgress, setFinished } from './statusoSlice'
import { useDispatch } from 'react-redux'

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  status: 'idle',
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        console.log('fetchPosts.pending')
        state.isLoading = true
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log('fetchPosts.fulfilled')
        state.isLoading = false
        state.error = null
        state.posts = action.payload
        state.status = 'succeeded'
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        console.log('fetchPosts.rejected')
        state.isLoading = false
        state.error = action.error.message
        state.status = 'failed'
      })
  },
})

// export const { setLoading, setError, setFulfilled } = postSlice.actions // not yet used
export const { setLoading, setError } = postSlice.actions

export default postSlice.reducer
