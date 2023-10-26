import { sleep } from '@/lib/utils'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { content: '', showSidebar: true, menuSelected: '' }

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload
    },
    toggleSidebar: state => {
      return { ...state, showSidebar: !state.showSidebar }
    },
    selectMenu: (state, action) => {
      state.menuSelected = action.payload.nodeitem
      if (action.payload.leaf) {
        state.showSidebar = false
      }
    },
  },
})

export const { setContent, toggleSidebar, selectMenu } = utilSlice.actions
export default utilSlice.reducer
