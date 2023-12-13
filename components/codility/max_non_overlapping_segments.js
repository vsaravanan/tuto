export const max_non_overlapping_segments = (a, b) => {
  console.log(`max_non_overlapping_segments`)
  console.log(`============================`)
  console.log(a, b)

  if (a.length < 1) {
    return 0
  }
  let cnt = 1
  let pend = b[0]

  let i = 0
  console.log(a[i], b[i], pend, cnt)
  for (i = 1; i < a.length; i++) {
    if (a[i] > pend) {
      cnt++
      pend = b[i]
    }
    console.log(a[i], b[i], pend, cnt)
  }

  return cnt
}
