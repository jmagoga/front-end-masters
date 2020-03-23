//compare these two functions to find out if an array has unique values

const isUnique = (arr) => {
  let result = true
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length;j++) {
      if (i !== j && arr[i] === arr[j]) {
        result = false
      }
    }
  }
  return result
}

//faster with caching

const isUnique = (arr) => {
  let result = true
  let breadcrumbs = {}
  
  for (let i = 0; i < arr.length; i++) {    
      if (breadcrumbs[arr[i]]) {
        result = false
      }
      else {
        breadcrumbs[arr[i]] = true
      }
    }
  }
  return result
}
