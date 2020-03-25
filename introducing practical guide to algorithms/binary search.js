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
