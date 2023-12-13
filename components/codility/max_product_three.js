const data_max_product_three = [-8, 1, 2, -2, 5, 6]

export const max_product_three = (A = data_max_product_three) => {
  let result
  const max_product_three_in = arr => {
    let s = arr.sort((a, b) => a - b)
    console.log(s)
    let l = s.length
    let max1 = s[l - 1] * s[l - 2] * s[l - 3]
    let max2 = s[0] * s[1] * s[l - 1]
    result = Math.max(max1, max2)
    console.log(max1, max2, result)
    return result
  }

  max_product_three_in(A)

  return result
}
