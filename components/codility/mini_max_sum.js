export const mini_max_sum = arr => {
  console.log(arr)
  let s = arr.sort((a, b) => a - b)
  console.log(s)

  let min = 0
  let max = 0
  for (let i = 0; i < arr.length - 1; i++) {
    min += s[i]
    max += s[s.length - i - 1]
    console.log(min + ' ' + max)
  }
  return min + ' ' + max
}
