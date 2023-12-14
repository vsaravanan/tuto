export const tape_equilibrium = (A = [3, 1, 2, 4, 3]) => {
  const N = A.length

  if (N === 0) {
    return 0
  }

  let totalSum = A.reduce((sum, value) => sum + value, 0)
  console.log(` totalSum : ${totalSum} `)

  let sumLeft = 0
  let sumRight = totalSum
  let minDifference = Math.abs(sumLeft - sumRight)
  console.log([...A])

  let i = 0
  for (let a of [...A]) {
    if (i === A.length - 1) {
      break
    }

    sumLeft += a
    sumRight -= a

    let currentDifference = Math.abs(sumLeft - sumRight)
    minDifference = Math.min(currentDifference, minDifference)
    console.log(
      `a: ${a}, sumLeft: ${sumLeft}, sumRight: ${sumRight}, currentDifference: ${currentDifference}, minDifference: ${minDifference}`,
    )

    i++
  }

  console.log(minDifference)
  return minDifference
}
