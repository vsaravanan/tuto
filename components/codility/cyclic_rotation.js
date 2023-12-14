const data_cyclic_rotation = [3, 8, 9, 7, 6]

export const cyclic_rotation = (A = data_cyclic_rotation, K = 3) => {
  const cyclic_rotation_in = (s, k) => {
    let dopop = k % s.length
    console.log('dopop ', dopop)

    let i = 0
    while (i < dopop) {
      s.unshift(s.pop())
      console.log(i, ' ', s)
      i++
    }

    return s
  }

  let result = cyclic_rotation_in(A, K)

  return result
}
