const findMaxIndexRecursive = (arr, currentIndex = arr.length - 1, maxIndex = arr.length - 1) => {
  if (currentIndex === 0) {
    return maxIndex
  }

  const currentElement = arr[currentIndex]
  const maxElement = arr[maxIndex]

  if (currentElement > maxElement) {
    maxIndex = currentIndex
  }

  console.log(` ${currentElement}, maxElement: ${maxElement}`)

  return findMaxIndexRecursive(arr, currentIndex - 1, maxIndex)
}

const find5thBigNumRecursive = (arr, k, result = []) => {
  if (k === 0) {
    return result
  }

  console.log(`k : [${k - 1}] arr: [${arr}], result: [${result}]`)

  const maxIndex = findMaxIndexRecursive(arr)
  const maxElement = arr.splice(maxIndex, 1)[0]

  result.push(maxElement)

  return find5thBigNumRecursive(arr, k - 1, result)
}

export const find5thBigNum = arr => {
  return find5thBigNumRecursive(arr, 5)
}
