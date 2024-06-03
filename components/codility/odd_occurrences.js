const findOddElement = arr => {
  let k = 1
  let prevElement = arr.pop()

  const oddElements = []

  while (arr.length > 0) {
    const currentElement = arr.pop()

    console.log(
      `Current Element: ${currentElement}, Previous Element: ${prevElement}, k: ${k}, odds : ${oddElements} `,
    )

    if (currentElement === prevElement) {
      k = k === 0 ? 1 : 0
    } else {
      if (k === 1) {
        oddElements.push(prevElement)
      } else {
        k = 1
      }
    }

    prevElement = currentElement
  }

  if (k === 1) {
    oddElements.push(prevElement)
    console.log(` Previous Element: ${prevElement}, k: ${k}, odds : ${oddElements} `)
  }

  return oddElements
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
