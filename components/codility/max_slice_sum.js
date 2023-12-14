export const max_slice_sum = (A = maxslice_data) => {
  let max = 0
  let acc = 0

  for (let a of A.reverse()) {
    acc = Math.max(a, acc + a)
    max = Math.max(max, acc)
    console.log(acc + '  ' + max)
  }

  return max
}
