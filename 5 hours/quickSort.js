//another divide and conquer

takes up less memory than mergeSort. however, if  sorted list is passed, it does veeery poorly
(everything gets compared to everything as one side is blank. n2

Big O of (n log n)

//pega o último número da lista como o 'pivot. esse último número vai ser o 'meio' da lista,
//tudo menor que ele vai pra esquerda, tudo maior, pra direita... recursivamente
//depois, se junta a lista da esquerda, com o pivot, com a da direita

//ex:
[4, 8, 1, 3, 7, 6] //---> pivot é o '6', ai divide-se em [1, 3, 4] 6 [7, 8].

//repete-se o processo depois

na lista [1, 3, 4], o '4' é o pivot... e assim por diante. quando tem só 1 numero, retorna-se outro empty array

pivot never gets passed down!!!

  
  
function quickSort(arr) {
  if (arr.length <=1) {
    return arr
  }
  
  const pivot = arr[arr.length-1]
  
  const left = []
  const right =[]
  
  for (let i = 0, l = arr.length-1; i < l ;i++) { //arr.length-1 p não pegar o último número (que é o pivot)
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, 4, 1, 7, 5, 84, 33, 55, 45]))
