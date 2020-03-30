//compare these two functions to find out if an array has unique values

const isUnique = (arr) => {
  let result = true
  
  for (let i = 0; i < arr.length; i++) { //aqui loopamos um loop (nested loop). O(n^2), quadratic.
    for (let j = 0; j < arr.length;j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false
      }
    }
  }
  return result
}

//faster with caching


//this below is a hash table!!!

const isUnique = (arr) => {
  let result = true
  let breadcrumbs = {}
  
  for (let i = 0; i < arr.length; i++) { //aqui loopamos uma só vez. O(n), linear   
      if (breadcrumbs[arr[i]]) { //1. esse valor já existe lá no breadcrumbs? resultado é falso, array nao é unico
        result = false
        return result
      }
      else {
        breadcrumbs[arr[i]] = true //2. se nao, adiciona ele no breadcrumbs como TRUE, q se nao no 'if' ele vai comprar com uma cois falsa. 
      }
    }
  }
  return result
}





//REVISAO

function isUnique(arr) {
  let result = true
  const breadcrumbs = {}
  for (let i=0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) {
      result = false
      return result
    }
    breadcrumbs[arr[i]] = true //assim que se adiciona algo a um objeto ---> OBJETO[*COISA A ADICIONAR*]
  }
  return result
}

console.log(isUnique([1, 2, 3, 4, 5])) //true
console.log(isUnique([1, 2, 3, 4, 1])) //false
