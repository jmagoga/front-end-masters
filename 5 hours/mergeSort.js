mergeSort (also known as 'stitch' and merge ARE DIFFERENT

//divide and conquer algorithm

//most often the one that's going to be used

arr.sort() is almos always mergeSort().     in firefox, quickSort might be used depending on the data size

//recursive

//BigO = log(n)

//first divide into two other lists. then, divide the other lists further

//it's broken down to one, where it's already sorted.

//Big O (n log n) --> go over everything at least once. at least n. no algorithm faster than (n).
//(n log n) don't compare everything to everything like (n2) algos.
//this one doesn't compare everything to everthing. makes assumptions
//space complexity = (n) not every efficient with memory

function mergeSort(nums) {
  if (nums.length < 2) {
    return nums
  }
  
  const length = nums.length
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  return stitch(sortedLeft, sortedRight)
  
  }
  
function stitch(left, right) {
  const results = []
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
        results.push(right.shift())
    }
    while (left.length) {
      results.push(left.shift())
    }
    while (right.length) {
      results.push(right.shift())
    }
  }
  return results //n esquecer o return
  
}
  

console.log(mergeSort([10, 2, 11, 55, 23]))

//abaixo da erro no no codepen (unexpected { at line 2)

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const length = arr.length
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, length)
  
  const mergedLeft = mergeSort(left)
  const mergedRight = mergeSort(right)
  
  return stitch(mergedLeft, mergedRight) //não esquecer o 'return'
}

stitch(left, right) { //n funciona pq eu nao declarei 'function'
  const results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
    while (left.length) {
      results.push(left.shift())
    }
    while (right.length) {
      results.push(right.shift())
    }
  }
    return results
  }
  

console.log(mergeSort([12, 3, 1, 55, 5, 6, 22]))






//melhor maneira de todas

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const length = arr.length
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, length)
  
  const mergedLeft = mergeSort(left)
  const mergedRight = mergeSort(right)
  
  return stitch(mergedLeft, mergedRight) //não esquecer o 'return'
}

function stitch(left, right) {
  const results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
    return [...results, ...left, ...right]   //bem mais simples. ou left ou right vao estar vazios, entao poe os dois ali. aquele q tiver coisa vai passar aquele q nao tiver nada n passa nada
}
  

console.log(mergeSort([12, 3, 1, 55, 5, 6, 22]))




//revisao
function mergeSort(arr) {
  //base case
  if (arr.length < 2) {  //RECURSION, don't forget the base case!!
      return arr
      }
  
  const length = arr.length
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle) //middle, length
  
  return stitch(mergeSort(left), mergeSort(right))
}

function stitch(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return [...result, ...left, ...right]
}

console.log(mergeSort([1 ,23, 4, 3, 7, 55, 99, 64]))
