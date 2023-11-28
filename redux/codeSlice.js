// redux/codeSlice.js

import { create } from 'zustand'

const useCodeStore = create(set => ({
  code: '',

  setCode: mycode => set({ code: mycode }),
}))

export default useCodeStore
