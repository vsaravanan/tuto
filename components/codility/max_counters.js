export const max_counters = (arr = [3, 4, 4, 6, 8, 1, 4, 4], n = 5) => {
  const counter = new Array(n).fill(0)
  let max = 0,
    counterMaxed = false

  for (let curr of arr) {
    if (curr > n) {
      if (!counterMaxed) {
        counter.fill(max)
        counterMaxed = true
      }
      console.log(
        `curr: ${curr}, counter: [${counter}], max: ${max}, counterMaxed: ${counterMaxed}`,
      )
      continue
    }

    curr--
    counter[curr]++
    counterMaxed = false
    if (counter[curr] > max) {
      max = counter[curr]
    }

    console.log(
      `curr: ${curr + 1}, counter: [${counter}], max: ${max}, counterMaxed: ${counterMaxed}`,
    )
  }

  return counter
}
