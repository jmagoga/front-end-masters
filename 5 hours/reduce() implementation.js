const myReduce = (list, fn, seed) => {
  let answer = seed
  for (let i = 0; i < list.length; i++) {
    answer = fn(answer, list[i])
  }
  return answer
}
