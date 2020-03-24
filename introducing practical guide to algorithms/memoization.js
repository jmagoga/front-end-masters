//memoiation is the caching of the return value of a function.

const times10 = num => num * 10

const cache = {}

const memoTimes = n => {
  if (n in cache) {
    return `cached value of ${cache[n]}`
  }
  else {
    let result = times10(n)
    cache[n] = result
    return `result ${result}`
  }
}


console.log(memoTimes(9)) //result 90
console.log(memoTimes(11)) //result 110
console.log(memoTimes(9)) //cached value of 90


//MEMOIZATION WITH CLOSURE
//use a closure to return a function that you can call later


const memoizedClosureTimes10 = () => {
  let cache = {} //we're making this private to this function. it's not available to the global scope
  return (n) => {
    if (n in cache) {
    return `cached value of ${cache[n]}`
  }
  else {
    let result = n * 10
    cache[n] = result
    return `result ${result}`
  }
  }
}

const memoClosureTimes10 = memoizedClosureTimes10() //fica o valor do que vem apos o return, MAS, ainda lembra do cache que está fora
console.log(memoClosureTimes10(9))
console.log(memoClosureTimes10(10))
console.log(memoClosureTimes10(9))


//tb podemos fazer o acima passando um argumento que é lembrado...


const memoizedClosureTimesM = (m) => {
  let cache = {}
  return (n) => {
    if (n in cache) { //1. important for very expensive function calls. speeds up time complexity!
    return `cached value of ${cache[n]}`
  }
  else {
    let result = n * m //2. if this was expensive, we wouldn't want to do it again with a result we already know the answer of
    cache[n] = result 
    return `result ${result}`
  }
  }
}

const memoClosureTimesM = memoizedClosureTimesM(12)
console.log(memoClosureTimesM(9)) //result 108
console.log(memoClosureTimesM(10)) //result 120
console.log(memoClosureTimesM(9)) //cached value of 108


//generic memoize
//memoization with closure and callback

const times10 = num => num * 10

const memoizedClosure = (callback) => {
  let cache = {}
  return (n) => {
    if (n in cache) {
    return `cached value of ${cache[n]}`
  }
  else {
    let result = callback(n) //usando a função passada como callback
    cache[n] = result
    return `result ${result}`
  }
  }
}

const memoClosureTimes10 = memoizedClosure(times10)
console.log(memoClosureTimes10(9)) //result 90
console.log(memoClosureTimes10(10)) //result 100
console.log(memoClosureTimes10(9)) //cached value of 90


