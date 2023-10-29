import useFetch from '@/lib/useFetch'
import {
  cIndicator,
  cLayout,
  setError,
  setFinished,
  setProgress,
  setRaw,
} from '@/redux/statusoSlice'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Indicators = () => {
  const url = 'http://localhost:4000/posts'
  const { statuso } = useSelector(state => state.statuso)
  const { raw } = useSelector(state => state.statuso)
  const dispatch = useDispatch()

  const progress = useCallback(() => dispatch(setProgress(cLayout)), [])

  const popraw = useCallback((data, key) => {
    let wrapdata = { data, key }
    dispatch(setRaw(wrapdata))
  }, [])

  const finished = useCallback(() => dispatch(setFinished(cLayout)), [])
  const erroro = useCallback(() => dispatch(setError(cLayout)), [])

  const myFetch = (method, url, body) =>
    useFetch(method, url, body, cLayout, cIndicator, statuso, progress, popraw, finished, erroro)

  useEffect(() => {
    myFetch('GET', url, {})
  }, [url, progress, popraw, finished])

  const posts = raw[cIndicator]

  return (
    <>
      {!posts ? (
        ''
      ) : (
        <ul>
          {posts?.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Indicators
