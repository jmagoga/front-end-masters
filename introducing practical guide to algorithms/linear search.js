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



//REVISAO

function linearSearch(list, num) { //assumption: list is already sorted
  for (let i = 0; i < list.length; i++) {
    if (list[i] === num) return i
  }
  return -1
}

console.log(linearSearch([1, 2, 3, 4, 11, 15, 16 ,17 ,18], 6))
