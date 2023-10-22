// redux/postSlice.js
import { delay } from '@/lib/utils'
import { createSlice } from '@reduxjs/toolkit'
import { produce } from 'immer'

export const cLayout = 'layout'
export const cIndicator = 'indicator'

export const cStart = 'start'
export const cProgress = 'progress'
export const cFinished = 'finished'
export const cError = 'error'

const initialState = {
  raw: {},
  statuso: { [cLayout]: cFinished },
}

const updateObject = (obj, key, value) => {
  return { ...obj, ...{ [key]: value } }
}

const statusoSlice = createSlice({
  name: 'statuso',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      console.log(action.payload + ' ' + cProgress)
      state.statuso = updateObject(state.statuso, action.payload, cProgress)
    },
    setFinished: (state, action) => {
      console.log(action.payload + ' ' + cFinished)
      state.statuso = updateObject(state.statuso, action.payload, cFinished)
    },
    setError: (state, action) => {
      console.log(action.payload + ' ' + cError)
      state.statuso = updateObject(state.statuso, action.payload, cError)
      state.raw = { [action.payload]: [] }
    },
    setRaw: (state, action) => {
      console.log(action.payload.key + ' Raw ')
      state.raw = updateObject({}, action.payload.key, action.payload.data)

      // console.log('layout ' + cFinished)
      // state.statuso = updateObject(state.statuso, cLayout, cFinished)
    },
  },
})

export const { setProgress, setFinished, setError, setRaw } = statusoSlice.actions

export default statusoSlice.reducer
