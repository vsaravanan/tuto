export const binary_gap = (A = 9) => {
  // let v = '0000' + A.toString(2)
  let v = A.toString(2)

  let f = false // to ignore front zeros
  let m = 0
  let c = 0
  for (const a of v) {
    if (a == 1) {
      m = Math.max(m, c)
      c = 0
      f = true
    } else {
      if (f) {
        c++
      }
    }
    console.log(` a : ${a}, c : ${c}, m : ${m},   `)
  }

  return m
}

// for (let i = 284; i < 288; i++) {
//   let v = binary_gap(i)
//   console.log(` ${i}     ${'0000' + i.toString(2)}  ${v} `)
// }
