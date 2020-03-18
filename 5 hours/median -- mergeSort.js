//esse algoritimo para achar o 'median' number usa parte do algoritimo do mergeSort
//mais precisamente a parte do 'stitch', em que se junta os arrays.

//aqui é muito eficiente pois não se passa por todos os números do array
//se cria um único array com a METADE dos números do total da some dos dois arrays

function findMedian(arr1, arr2) {
  let totalLength = arr1.length + arr2.length;
  let medianIndex = Math.floor(totalLength/2);
  let results = [];

    while (results.length <= medianIndex) {
      if (arr1[0] < arr2[0]) {
        results.push(arr1.shift())
      } else {
        results.push(arr2.shift())
      }   
    }
  console.log(results)
   return results[medianIndex]
}

console.log(findMedian([1, 5, 8], [2, 3, 7, 10])) //1, 2, 3, *5*, 7, 8, 10   -> 5 is the median!
