const uniqSort = (arr) => {
  const breadcrumbs = {}
  let result = []
  for(let i=0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i])
      breadcrumbs[arr[i]] = true
    } 
  }
  return result.sort((a, b) => a - b)
}

console.log(uniqSort([1,3,1, 2])) //1, 2, 3


//conseguimos fazer em vez de O(n^2) quadratic, O(n), linear, usando caching com o breadcrumb. mas...
//problem with space complexity we need to consider (toda vez vamos cacheando mais e mais coisas na memoria)


//revisao ----- otimo para não fazer 2 loops

//se tem repetido, não é adicionado

function uniqSort(arr) {
  const breadcrumbs = {}
  result = [] //n esquecer do 'result'
  for (let i=0; i < arr.length; i++) {
    if(!breadcrumbs[arr[i]]) { //ve se o breadcrumbs de tal coisa É FALSO
      result.push(arr[i]) //push no result
      breadcrumbs[arr[i]] = true //tem q marcar como true se não o 'if' statement nao funciona
    }
  }
  return result.sort((a,b) => a - b)
}

console.log(uniqSort([1, 2, 1, 4, 5, 4, 19]))
