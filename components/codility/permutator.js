export const permutator = inputArr => {
  let result = []

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m.toString().replace(/,/g, ''))
      console.log(` result ${result}  `)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice()
        let next = curr.splice(i, 1)
        console.log(` curr ${curr} ,  next ${next} ,  `)
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(inputArr)

  console.log(result)

  return result
}
