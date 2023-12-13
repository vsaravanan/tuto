export const maxOccurrence = text => {
  console.log(text)

  const charOccurrences = {}

  ;[...text].forEach(char => {
    charOccurrences[char] = (charOccurrences[char] || 0) + 1
  })

  const maxOccurrence = Object.keys(charOccurrences).reduce(
    (acc, key) => {
      const currentOccurrence = charOccurrences[key]
      return currentOccurrence > acc.occurrence
        ? { letter: key, occurrence: currentOccurrence }
        : acc
    },
    { letter: '', occurrence: 0 },
  )

  console.log(`maxChar: ${maxOccurrence.letter}, maxOccurrences: ${maxOccurrence.occurrence}`)

  return maxOccurrence.letter
}
