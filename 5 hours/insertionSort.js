//actually used

//inner loop

function insertionSort(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
          //j < i     ?   para não ir além do comprimento do array
        for (let j = 0; j < i; j++) {
              //se o número de depois arr[i] é menor que o de antes arr[j], por o numero de dps, antes.
            if (arr[i] < arr [j]) {
                let spliced = arr.splice(i, 1)
                arr.splice(j, 0, spliced[0])
            }   
        }
     } return arr
}
