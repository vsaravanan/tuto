export const delay = ms => new Promise(res => setTimeout(res, ms))

export const myTimeout = (millis, cb) => {
  const timeout = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Timed out after ${millis} ms.`), millis),
  )
  //   const fn = new Promise(() => cb)
  return Promise.race([timeout, cb])
}

// myTimeout(3000, fetchData())

// function delayedHello(cb) {
//   setTimeout(function () {
//     cb('Hello')
//   }, 1000)
// }

// Promise.timeout(800, delayedHello)
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (e) {
//     console.log(e)
//   }) //delayedHello doesn't make it.

// Promise.timeout(1200, delayedHello)
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (e) {
//     console.log(e)
//   }) //delayedHello makes it.
