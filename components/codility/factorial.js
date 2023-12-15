/* global BigInt */
export const factorial = n => {
  let k = BigInt(n)
  if (k < 2) {
    return BigInt(1n)
  } else {
    return k * factorial(k - 1n)
  }
}
