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

  const controller = new AbortController()
  const signal = controller.signal

  // Cancel the fetch request in 500ms
  setTimeout(() => controller.abort(), 2000)

  try {
    progress()
    const headers = {
      method,
      url,
      headers: { 'Content-Type': 'application/json' },
      body,
      signal,
    }

    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer my-token',
    //   'My-Custom-Header': 'foobar'
    // },

    // const res = await axios({
    //   method,
    //   url,
    //   data: body,
    // })
    // const data = await res?.data

    let datawr = null
    await fetch(url, { headers })
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json')
        const data = isJson ? await response.json() : null
        // check for error response
        if (!response.ok || response?.status >= 400) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status
          // return Promise.reject(error)
          throw new Error('Bad fetch respnse', response)
        }

        datawr = data
      })
      .catch(error => {
        datawr = `Error: ${error}`
        console.error('There was an error!', error)

        // Handle the error with access to status and body
        switch (error.response.status) {
          case 400:
            /* Handle */ break
          case 401:
            /* Handle */ break
          case 404:
            /* Handle */ break
          case 500:
            /* Handle */ break
        }
      })
    popraw(datawr, datakey)
    finished() // otherwise it is getting cyclic
    // setTimeout(() => {
    //   finished() // otherwise it is getting cyclic
    // }, 300)
  } catch (error) {
    console.log('no connectivity. server may be down.')
    erroro()
  }
}

export default useFetch

// const response = await fetch("https://api.adviceslip.com/advice", {
//   next: { revalidate: 5 },
