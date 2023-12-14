export const tie_ropes = (k, b) => {
  console.log(`tie_ropes`)
  console.log(`=========`)
  console.log(k, b)

  let cnt = 0
  let current = 0

  for (const a of b) {
    current += a
    if (current >= k) {
      cnt++
      current = 0
    }
    console.log(k, a, current, cnt)
  }

  return cnt
}
