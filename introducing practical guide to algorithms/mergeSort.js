function mergeSort(arr) {
  if (arr.length === 1) return arr
  
  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  
  return merge(mergeSort(left), mergeSort(right)) //'stitch' segundo o Brian Holt. e acho q ele recursava aqui
}

function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0
  
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[leftIndex] < right[indexRight]]) {
      results.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft).concat(right.slice(indexRight)))
}

const list = [12 ,2 ,5,1 ,123, 11 ,9, 55]
