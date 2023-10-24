export const delay = ms => new Promise(res => setTimeout(res, ms))

export const myTimeout = (millis, cb) => {
  const timeout = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Timed out after ${millis} ms.`), millis),
  )
  //   const fn = new Promise(() => cb)
  return Promise.race([timeout, cb])
}

export const fetcher = url => fetch(url).then(res => res.json())
