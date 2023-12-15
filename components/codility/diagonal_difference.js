export const diagonal_difference = arr => {
  console.log(arr)
  let n = arr.length

  let l = 0
  let r = 0

  for (let i = 0; i < n; i++) {
    l += arr[i][i]
    r += arr[i][n - i - 1]
    console.log(`Diagonal element (${i + 1}, ${i + 1}):`, arr[i][i], 'Left sum:', l)
    console.log(`Anti-diagonal element (${i + 1}, ${n - i}):`, arr[i][n - i - 1], 'Right sum:', r)
  }
  let a = Math.abs(l - r)
  console.log(a)
  return a
}
