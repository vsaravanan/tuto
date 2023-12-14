const gcd = (x, y) => {
  while (y !== 0) {
    // console.log(` x ${x} y ${y} `)
    const temp = y
    y = x % y
    x = temp
  }

  //   console.log(`    GCD result: ${x}`)
  return x
}

const hasSamePrimeDivisors = (x, y) => {
  const gcdValue = gcd(x, y)

  while (x !== 1) {
    const xGCD = gcd(x, gcdValue)
    console.log(`gcdValue ${gcdValue}    x ${x}    xGCD ${xGCD} `)
    if (xGCD === 1) {
      console.log(`x does not contain any more common prime divisors`)
      break
    }
    x /= xGCD
  }

  if (x !== 1) {
    console.log(`x and y do not have the same common prime divisors`)
    return false
  }

  while (y !== 1) {
    const yGCD = gcd(y, gcdValue)
    console.log(`gcdValue ${gcdValue}    y ${y}    yGCD ${yGCD} `)

    if (yGCD === 1) {
      console.log(`y does not contain any more common prime divisors`)
      break
    }
    y /= yGCD
  }

  console.log(`Checking if y is equal to 1: ${y === 1}`)
  return y === 1
}

export const common_prime_divisors = (A, B) => {
  let count = 0

  for (let i = 0; i < A.length; i++) {
    const x = A[i]
    const y = B[i]

    console.log(`Checking pair (${x}, ${y})`)
    if (hasSamePrimeDivisors(x, y)) {
      count++
    }
  }

  return count
}
