//boa pra quando tu ja tem uma lista que está meio sorted, organizada, ordenada

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


//que eu mesmo fiz, minha lógica

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j=0; j < i; j++) { //1. o 'j' é sempre o número 'de antes' na lista (no array). 
      if (arr[j] > arr[i]) { //2. se o número de antes é maior que o de depois
        let spliced = arr.splice(j, 1) //3. tira o  número de antes
        arr.splice(i, 0, spliced[0]) //4. e poe ele depois do 'de depois' de antes
      }                     //lembrar que splice sempre RETORNA UM ARRAY
    }                       //por isso, pegar o item daquele array spliced[0]
  } return arr
}

console.log(insertionSort([10, 2, 11, 55, 23]))



//revisao
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { //i=1, j=0, arr[i] < arr[j], sPlice(i, 1), arr.splice(j, 0, spliced[0])
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const spliced = arr.splice(i, 1)
        arr.splice(j, 0, spliced[0])
      }
    }
  }
  return arr
}

console.log(insertionSort([1 ,23, 4, 3, 7, 55, 99, 64]))
