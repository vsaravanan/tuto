export const array_manipulation_old = (
  n = 10,
  queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ],
) => {
  const data = new Array(n + 1).fill(0)
  console.log(data)

  for (let i of queries) {
    let a = i[0]
    let b = i[1]
    let k = i[2]
    for (let j = a; j <= b; j++) {
      data[j] += k
      // console.log(j + '----' + data)
    }
    console.log('--' + data)
  }
  let max = Math.max(...data)
  console.log(max)

  return max
}

export const array_manipulation = (
  n = 10,
  queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ],
) => {
  const arr = new Array(n + 2).fill(0)
  console.log(arr)
  for (const query of queries) {
    const a = query[0]
    const b = query[1]
    const k = query[2]

    arr[a] += k
    arr[b + 1] -= k

    console.log(arr)
    // console.log(a, b, k, arr[a], arr[b - 1])
  }

  let max = Number.MIN_VALUE
  let sum = 0

  for (const query of arr) {
    sum += query
    max = Math.max(max, sum)
    console.log(query, sum, max)
  }

  return max
}
