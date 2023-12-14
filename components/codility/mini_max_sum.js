export const mini_max_sum = arr => {
  let s = arr.sort((a, b) => a - b)

  let min = 0
  let max = 0
  for (let i = 0; i < arr; i++) {
    min += s[i]
    max += s[s.length - i - 1]
    console.log(min + ' ' + max)
  }
  return min + ' ' + max
}
