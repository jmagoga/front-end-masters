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
  return results
  
}
  

console.log(mergeSort([10, 2, 11, 55, 23]))
