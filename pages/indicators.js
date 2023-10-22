import { delay, myTimeout } from '@/lib/utils'
import { setFulfilled, setLoading } from '@/redux/postSlice'
import {
  cFinished,
  cIndicator,
  cLayout,
  cProgress,
  cStart,
  setError,
  setFinished,
  setProgress,
  setRaw,
} from '@/redux/statusoSlice'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '@/redux/postSlice'

const Indicators = () => {
  const url = 'http://localhost:4000/posts'
  const { statuso } = useSelector(state => state.statuso)
  const { raw } = useSelector(state => state.statuso)
  const dispatch = useDispatch()

  const popraw = useCallback(data => {
    let wrapdata = { data, key: cIndicator }
    dispatch(setRaw(wrapdata))
  }, [])

  const finished = useCallback(() => dispatch(setFinished(cLayout)), [])

  const fetchData = async () => {
    try {
      dispatch(setProgress(cLayout))
      const res = await fetch(url)
      const json = await res.json()

      popraw(json)

      setTimeout(() => {
        finished() // otherwise it is getting cyclic
      }, 500)
    } catch (error) {
      setError(cLayout)
    }
  }

  // debugger
  useEffect(() => {
    if (statuso[cLayout] === cProgress) return
    fetchData()
  }, [dispatch, raw, popraw, finished]) // progress, erroro

  const posts = raw['indicator']

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
