import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setContent: (state, action) => {
      return { ...state, content: action.payload }
    },
  },
})

export const { setContent } = utilSlice.actions
export default utilSlice.reducer
