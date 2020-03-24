const linearSearch = (arr, number) => {
  let index = -1
  arr.forEach((item, i) => {
    if (item === number) {
      index = i
    }
  })
  return index
}

console.log(linearSearch([1, 2, 3], 2)) //1 -- index onde está o 2. 
