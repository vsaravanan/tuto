const findOddElement = arr => {
  let k = 1
  let prevElement = arr.pop()

  while (arr.length > 0) {
    const currentElement = arr.pop()

    console.log(`Current Element: ${currentElement}, Previous Element: ${prevElement}, k: ${k}`)

    if (currentElement === prevElement) {
      k = k === 0 ? 1 : 0
    } else {
      if (k === 1) {
        break // Odd occurrence found, exit the loop
      } else {
        k = 1
      }
    }

    prevElement = currentElement
  }

  console.log(
    k === 1 ? `Odd occurrence found: ${prevElement}` : `No odd occurrence found, returning -1`,
  )
  return k === 1 ? prevElement : -1
}

export const odd_occurrences = A => {
  const sortedArray = A.sort((a, b) => a - b)
  console.log(`Sorted Array: ${sortedArray}`)

  if (sortedArray.length === 0) {
    console.log(`Array is empty, returning -1`)
    return -1
  }

  return findOddElement([...sortedArray])
}
