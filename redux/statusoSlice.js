// redux/statuoSlice.js

import { create } from 'zustand'

export const cLayout = 'layout'
export const cIndicator = 'indicator'

export const cStart = 'start'
export const cProgress = 'progress'
export const cFinished = 'finished'
export const cError = 'error'

const updateObject = (obj, key, value) => {
  return { ...obj, ...{ [key]: value } }
}

const useStatusoStore = create(set => ({
  raw: {},
  statuso: { [cLayout]: cFinished },
  setProgress: payload => {
    console.log(payload + ' ' + cProgress)
    set(state => ({
      statuso: updateObject(state.statuso, payload, cProgress),
    }))
  },
  setFinished: payload => {
    console.log(payload + ' ' + cFinished)
    set(state => ({
      statuso: updateObject(state.statuso, payload, cFinished),
    }))
  },
  setError: payload => {
    console.log(payload + ' ' + cError)
    set(state => ({
      statuso: updateObject(state.statuso, payload, cError),
      raw: { [payload]: [] },
    }))
  },
  setRaw: payload => {
    console.log(payload.key + ' Raw ')
    set({ raw: updateObject({}, payload.key, payload.data) })
  },
}))

export default useStatusoStore

// const initialState = {
//   raw: {},
//   statuso: { [cLayout]: cFinished },
// }

// const statusoSlice = createSlice({
//   name: 'statuso',
//   initialState,
//   reducers: {
//     setProgress: (state, action) => {
//       console.log(action.payload + ' ' + cProgress)
//       state.statuso = updateObject(state.statuso, action.payload, cProgress)
//     },
//     setFinished: (state, action) => {
//       console.log(action.payload + ' ' + cFinished)
//       state.statuso = updateObject(state.statuso, action.payload, cFinished)
//     },
//     setError: (state, action) => {
//       console.log(action.payload + ' ' + cError)
//       state.statuso = updateObject(state.statuso, action.payload, cError)
//       state.raw = { [action.payload]: [] }
//     },
//     setRaw: (state, action) => {
//       console.log(action.payload.key + ' Raw ')
//       state.raw = updateObject({}, action.payload.key, action.payload.data)

//       // console.log('layout ' + cFinished)
//       // state.statuso = updateObject(state.statuso, cLayout, cFinished)
//     },
//   },
// })

// export const { setProgress, setFinished, setError, setRaw } = statusoSlice.actions

// export default statusoSlice.reducer
