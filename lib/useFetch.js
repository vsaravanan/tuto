import { cProgress } from '@/redux/statusoSlice'
import axios from 'axios'

const useFetch = async (
  method,
  url,
  body,
  layout,
  datakey,
  statuso,
  progress,
  popraw,
  finished,
  erroro,
) => {
  if (statuso[layout] === cProgress) return

  try {
    progress()
    const res = await axios({
      method,
      url,
      data: body,
    })

    const data = await res?.data
    popraw(data, datakey)
    setTimeout(() => {
      finished() // otherwise it is getting cyclic
    }, 300)
  } catch (error) {
    console.log('unable to display server down message properly')
    erroro()
  }
}

export default useFetch

// const response = await fetch("https://api.adviceslip.com/advice", {
//   next: { revalidate: 5 },
