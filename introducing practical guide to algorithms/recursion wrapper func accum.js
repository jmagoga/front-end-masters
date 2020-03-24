function wrappedFnLoop(start, end) { //it's a closure
  function recurse(i) {
    if (i < end) {
      recurse(i + 1)
    }
    
  }
  recurse(start)
}

//

function MemoFnLoop(i, end) {
  if (i < end) {
    MemoFnLoop(i + 1, end)
  }
}

//accumulator               similar to Array.join() -- posso escrever o meu para adicionar o 'and' no final
//after each loop, we are incrementing our index and saving a result in the accumulator. 
//the result is being passed down into our recursion (recursive function)
//at the same time getting closer to our base case

function joinElements(array, joinString) {
  
  function recurse(index, resultSoFar) {
    resultSoFar += array[index]
    
    if (index === array.length-1) {
      return resultSoFar
    } else {
      return recurse(index + 1, resultSoFar + joinString)
    }
  }
  return recurse(0, '')
}

console.log(joinElements(['s', 'cr', 't cod', ''], 'e'))


//same function with a loop
function joinElements(array, joinString) {
    resultSoFar = ''
    for (let i = 0; i < array.length - 1; i++) {
      resultSoFar += array[i] + joinString
    }
    return resultSoFar + array[array.length - 1]
}

console.log(joinElements(['s', 'cr', 't cod', ''], 'e'))
