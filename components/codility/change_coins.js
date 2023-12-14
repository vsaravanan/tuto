let cns = [100, 5, 10, 20, 50]
let stackCopy = 0
let textcoins = []

const getCoin = remainder => {
  let element = stackCopy.pop()
  console.log(`                  element: ${element}, remainder: ${remainder}`)
  return element > remainder ? getCoin(remainder) : element
}

const calculateNumberOfCoins = (amount, coinValue) => {
  return Math.floor(amount / coinValue)
}

const updateRemainder = (amount, numberOfCoins, coinValue) => {
  return amount - numberOfCoins * coinValue
}

const calculateCoinsRecursive = amount => {
  let nextcoin = getCoin(amount)

  if (nextcoin !== undefined) {
    let numberOfCoins = calculateNumberOfCoins(amount, nextcoin)
    let remainder = updateRemainder(amount, numberOfCoins, nextcoin)

    console.log(`coin: ${nextcoin}, noofcoins: ${numberOfCoins}, remainder: ${remainder}`)
    textcoins.push(` ${nextcoin} coin x ${numberOfCoins} no(s)   `)

    calculateCoinsRecursive(remainder, nextcoin)
  }
}

export const change_coins = amt => {
  console.log('==============================================')
  stackCopy = cns.slice().sort((a, b) => a - b)
  textcoins = []
  calculateCoinsRecursive(amt)
  console.log(textcoins)
  return textcoins
}
