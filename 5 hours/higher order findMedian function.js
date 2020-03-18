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
  let results = []
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
        results.push(right.shift())
    }
  }
  
  return results = [...results, ...left, ...right] //n esquecer o return
}


//this higher order function takes in a sorting function as callback and an array to be sorted, then the median number is found.
function findMedian(sortFunction, array) {
  const result = sortFunction(array)
  const medianIndex = Math.floor(result.length / 2)
  return result[medianIndex]
}

console.log(    findMedian(mergeSort, [10, 8, 5, 3, 1])           )
