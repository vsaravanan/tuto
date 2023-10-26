// pages/index.js
import { useGetPostsQuery } from '@/features/api/apiPosts' // createApi

import { fetchPosts } from '@/lib/fetchPosts' // createAsyncThunk. createSlice
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import useFetch from 'react-fetch-hook'
import { cLayout, setProgress, setFinished } from '@/redux/statusoSlice'
import { useRouter } from 'next/router'

const Home = () => {
  const url = 'http://localhost:4000/posts'
  const dispatch = useDispatch()
  const router = useRouter()

  // const { data: posts = [], isLoading, isFetching, isError, error } = useGetPostsQuery()

  const { posts = [], isLoading, isError, error, status } = useSelector(state => state.posts)

  // const { data, isLoading, isError, error } = useSWR(url, fetcher)

  // const { isLoading, apiError: error, apiData: posts } = useFetch('GET', url, {})

  // const { data: posts = [], isLoading, error } = useFetch(url)
  // const isError = !!error

  // const posts = data || []

  // const [data, setData] = useState(posts)

  // const fetch1 = () => {
  //   return fetch(url)
  //     .then(res => res.json())
  //     .then(d => setData(d))
  // }

  // const fetchByAxios = () => {
  //   return axios.get(url).then(response => setData(response.data))
  // }

  // useEffect(() => {
  //   fetchByAxios()
  // }, [])

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    } else if (isLoading) {
      dispatch(setProgress(cLayout))
    } else {
      dispatch(setFinished(cLayout))
    }
  }, [status])

  return (
    <div>
      <section>
        <p onClick={() => dispatch(fetchPosts())}>{`child isLoading ${isLoading}`}</p>
        <p onClick={() => router.push('/indicators')}>{`child isError ${isError} `}</p>
        <p>{`child error ${error?.status} === ${error?.statusText}`}</p>
        {posts?.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Home
