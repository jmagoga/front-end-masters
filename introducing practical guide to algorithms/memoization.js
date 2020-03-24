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
  let cache = {}
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

const memoClosureTimes10 = memoizedClosureTimes10()
