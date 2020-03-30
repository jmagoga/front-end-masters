//parar e pensar. não só ler

//we expect the array to be sorted

//break list in half everytime

const binarySearch = (list, numToFind) => {
  let min = 0
  let max = list.length - 1
  let guess
  
  while (min <= max) { //loopa por todos os números
    guess = Math.floor((min + max) / 2) //tenta achar o número do meio
    
    if (list[guess] === numToFind) { //se o 'guess' é o numero do meio, retorna ele (vai ser o index +/- na metade do arr)
      return guess
    } else {
      if (list[guess] < numToFind) { //mas se o número na metade do arr for menor que o número a achar
        min = guess + 1 //aumentamos o número minimo para o index METADE + 1 (deixando assim só a segunda metade)
      } else {
        max = guess - 1 //se for MAIOR que o numero a se achar, deixamos só a primeira metade do array
      }
    }
  }
  return -1
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 3)) // 3 (que eh o index)






//REVISAO

function binarySearch(list, num) { //assumption: list is already sorted
  let max = list.length-1
  let min = 0
  let guess
  
  while(min <= max) { //<=
    guess = Math.floor((min + max) / 2) //guess vira sempre o número do meio da lista, por isso dessa divisao
    if (list[guess] === num) {
      return `number is at index ${guess}` 
    } else {
      if (list[guess] < num) { //se for MENOR, muda o MIN
        min = guess +1 //+1 para nao incluir o guess
      } else { //se for MAIOR, muda o MAX
        max = guess -1 //-1 para não incluir o guess
      }
    }
  }
  return 'number not in list'
}

console.log(binarySearch([1, 2, 3, 4, 11, 15, 16 ,17 ,18], 55))
