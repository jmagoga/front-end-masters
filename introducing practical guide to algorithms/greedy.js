//takes the short sided decision,

//baby you want an oreo now or 2 later?   1 now!!!

//sempre pega o melhor imediato, nao o melhor overall.

//makeChange problem -- dar o minimo de moedas possiveis

//debugar, n funciona
const makeChange = (coins, amount) => {
  coins.sort((a, b) => a - b)
  let coinTotal = 0
  let i = 0
  while(amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i]
      coinTotal++
    } else {
      i++
    }
  }
  return coinTotal
}

console.log(makeChange[5, 10, 25, 50], 50)

n recomendado usar greedy em entrevistas, ruim de provar qnd esta correto

//brute force, goes thru every single combination

//at every step figure out every different scenario

//makeChange brute force (https://frontendmasters.com/courses/practical-algorithms/brute-force/)
let recursionCounter = 0
let coins = [1 ,3 ,5] //n sei se ta certo
const makeChange = (value) => {
  if (value === 0) return 0 
  let minCoins;
  coins.forEach((coin) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i)
      if (minCoins === undefined || currMinCoins < minCoins) {
          minCoins = currMinCoins
      }
    }
  })
  return minCoins + 1
}

