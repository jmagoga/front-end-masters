const uniqSort = (arr) => {
  const breadcrumbs = {}
  let result = [arr[0]]
  for(let i=1; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i])
      breadcrumbs[arr[i]] = true
    } 
  }
  return result.sort((a, b) => a - b)
}

console.log(uniqSort([1,3,1, 2]))

//conseguimos fazer em vez de O(n^2) quadratic, O(n), linear, usando caching com o breadcrumb. mas...
//problem with space complexity we need to consider (toda vez vamos cacheando mais e mais coisas na memoria)
