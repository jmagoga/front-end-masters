//bigO(n2)   inner and outer loop. wont be used for anything serious.

function bubbleSort(arr) {
  do {
    var swapped = false;
    for (let i = 0, l = arr.length; i < l; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
    return arr
}
