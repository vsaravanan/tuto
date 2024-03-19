import { create } from 'zustand'

const useUtilStore = create(set => ({
  content: '',
  keyp: '',
  showSidebar: true,
  menuSelected: '',
  setContent: content => set({ content }),
  toggleSidebar: () =>
    set(state => ({
      showSidebar: !state.showSidebar,
    })),
  selectMenu: payload => {
    set(state => ({
      menuSelected: payload.nodeitem,
      showSidebar: payload.leaf ? false : state.showSidebar,
      keyp: payload.keyp,
    }))
  },
}))

export default useUtilStore

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = { content: '', showSidebar: true, menuSelected: '' }

// const utilSlice = createSlice({
//   name: 'util',
//   initialState,
//   reducers: {
//     setContent: (state, action) => {
//       state.content = action.payload
//     },
//     toggleSidebar: state => {
//       return { ...state, showSidebar: !state.showSidebar }
//     },
//     selectMenu: (state, action) => {
//       state.menuSelected = action.payload.nodeitem
//       if (action.payload.leaf) {
//         state.showSidebar = false
//       }
//     },
//   },
// })

// export const { setContent, toggleSidebar, selectMenu } = utilSlice.actions
// export default utilSlice.reducer
