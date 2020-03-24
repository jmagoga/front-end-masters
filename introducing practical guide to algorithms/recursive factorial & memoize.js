//fix it as it's failing (https://frontendmasters.com/courses/practical-algorithms/recursive-factorial-memoize-solution/)

const memo = callback => { //1. recebe callback
  let cache = {}
  return (...args) => { //2. o que faz com o callback
    let n = args[0]
    if (n in cache) {
      console.log('fetching from cache, ', n)
      return cache[n]
    } else {
      console.log('calculating function, ', n)
      let result = callback(n)
      cache[n] = result
      return result
    }
  }
}

const factorial = memo(
  (x) => {
    if (x === 0) {
      return 1
    }
    else {
      return x * factorial(x-1)
    }
  }
)

factorial(5)
factorial(4)
factorial(5)
