export const climbing_the_leaderboard = (existingScores, newScores) => {
  // Determine ranks for new player's scores
  const ranks = []
  for (const score of newScores) {
    // Combine existing and new scores
    const allScores = [...existingScores, score]

    // Remove duplicates and sort in descending order
    const uniqueScores = Array.from(new Set(allScores)).sort((a, b) => b - a)

    // Find the position to insert the score to maintain descending order
    const rank = uniqueScores.findIndex(s => s <= score) + 1

    // Append the rank to the result
    ranks.push(rank)
  }

  return ranks
}
