// lib/fetchPosts.js
import { setPosts } from '@/redux/postSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { delay } from 'lib/utils'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const response = await fetch(`http://localhost:4000/posts`)
  await delay(1000)
  const posts = await response.json()

  return posts
})

export default fetchPosts

export const fetchProjectDataThunk = createAsyncThunk('projectData/get', async (_, thunkApi) => {
  thunkApi.dispatch(startLoading())
  try {
    const response = await getMyData()
    const { data, error } = response
    if (data && !error) {
      thunkApi.dispatch(dataFetched(data))
    } else {
      throw new Error('Failed to load data.')
    }
  } catch (error) {
    console.log(error)
    thunkApi.dispatch(dataFetchedWithError())
  }
})
