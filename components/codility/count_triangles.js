export const count_triangles = (A = [10, 2, 5, 1, 8, 20]) => {
  if (A.length < 3) {
    return 0
  }
  A = A.sort((a, b) => a - b)
  let count = 0
  console.log(A)
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] >= 0 && A[i] + A[i + 1] > A[i + 2]) {
      console.log(A[i], A[i + 1], A[i + 2])
      count++
    }
  }

  return count
}
