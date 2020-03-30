//memoiation is the caching of the return value of a function. This is basically a HASH TABLE

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

//MAS... e se quisessemos fazer mais generico, usando uma função que recebesse MAIS DO QUE 1 ARGUMENTO?
//podemos usar '...args' com o spread, e nos outros lugares só 'args'

//memoization with closure and callback

const times10MinusWhatever = (num1, num2) => num1 * 10 - num2

const memoizedClosure = (callback) => {
  let cache = {}
  return (...args) => { //recebe qqr numero de argumentos
    if (args in cache) {
    return `cached value of ${cache[args]}`
  }
  else {
    let result = callback(...args) //usando QUALQUER função passada como callback, pois recebe qqr numero de argumentos
    cache[args] = result
    return `result ${result}`
  }
  }
}

const memoClosureTimes10minusNum = memoizedClosure(times10MinusWhatever)
console.log(memoClosureTimes10minusNum(9, 10)) //result 80
console.log(memoClosureTimes10minusNum(10, 50)) //result 50
console.log(memoClosureTimes10minusNum(9, 10)) //cached value of 80












//REVISAO

const times10 = num => num * 10
const times30 = num => num * 30

const cache = {}

const memoize = (n, fn=times10) => {
  if (n in cache) { //causa problemas
    return `cached value of ${n} ${fn.name} = ${cache[n]}`
  }
  else {
    let result = fn(n)
    cache[n] = result
    return `${n} ${fn.name} = ${result}`
  }
}

console.log(memoize(5, times10))
console.log(memoize(13, times30))
console.log(memoize(5))
console.log(memoize(13))
console.log(memoize(5, times30))

//memo with closure

const times10 = num => num * 10
const times30 = num => num * 30

const memoize = (fn) => {
  let cache = {}
  return (n) => {
  if (n in cache) {
    return `cached value of ${n} ${fn.name} = ${cache[n]}`
  }
  else {
    let result = fn(n)
    cache[n] = result
    return `${n} ${fn.name} = ${result}`
  }
  }
}

const timesTHIRTY = memoize(times30)
console.log(timesTHIRTY(5))
const timesTEN = memoize(times10)
console.log(timesTEN(5))




//com multiplos argumentos
const times10 = num => num * 10
const times30 = num => num * 30
const timesWhatever = (num1, num2) => num1 * num2

const memoize = (fn) => {
  let cache = {}
  return (...args) => {
  if (args in cache) {
    return `cached value of ${args} ${fn.name} = ${cache[args]}`
  }
  else {
    let result = fn(args)
    cache[args] = result
    return `${args} ${fn.name} = ${result}`
  }
  }
}

const timesTHIRTY = memoize(timesWhatever)
console.log(timesWhatever(5, 11))
const timesTEN = memoize(times10)
console.log(timesTEN(5))



