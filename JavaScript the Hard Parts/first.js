//quase mesma coisa q implementar map
function copyArrayAndManipulate(arr, instruction) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(instructions(arr[i]))
  }
  return output
}

//ai temos outra função
const multiplyBy2 = input = input * 2

//obviamente podemos passar ela como callback
copyArrayAndManipulate([1, 2, 3], multiplyBy2)

//mas tb nao precisamos definir a função!!! //pra que definir ela em global se podemos só passar a intrução direto!!!
copyArrayAndManipulate([1, 2, 3], input => input * 2)

//o mesmo que isso
arr.map(input => input * 2)

















//function can be returned from other function in javascript
//closure
function createFunction() {
  function multiplyBy2(num) {
    return num * 2
  }
  return multiplyBy2
}

const generatedFunc = createFunction()
const result = generatedFunc(3) // 6







//calling a function in the same function call as it was defined
function outer() {
  let counter = 0
  function incrementCounter() {
    counter++
  }
  incrementCounter() //quando isso corre, acontece 'counter++'. counter++ olha dentro de incrementCounter mas não acha a
  //variavel counter. entao sai de dentro do execution context de incrementCounter e olha no de outer(), la, ENCONTRA counter
}
outer()





//calling a function outside of the function call in which it was defined

function outer() {
  let counter = 0
  function incrementCounter() { return counter++ }
  return incrementCounter
}

const myNewFunction = outer()
myNewFunction()
myNewFunction()








