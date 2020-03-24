//com recursion, sempre ter certeza de estarmos nos aproximando do 'base case', trazer input mais proximo do base case
//remember to return where appropriate (we might not want to lose our data as in the 2nd example below)

let tracker = 0
const callMe = () => {
  tracker++
  if (tracker === 3) { //think of it as "just recurse 3 times and then return loops"
    return 'loops'
  }
  return callMe('anytime') //RETORNA o 'loops' lá da função qnd esta no stack com tracker === 3
}

console.log(callMe())

//sem o return statement temos problemas, pq não temos o valor daquela função

let tracker = 0
const callMe = () => {
  tracker++
  if (tracker === 3) {
    return 'loops'
  }
  callMe('anytime') //WRONG. implicit return that returns 'undefined'. We should stick a 'return' in front of it.
}

console.log(callMe())

//passing argument
let tracker = 0
const callMe = (arg) => {
  tracker++
  if (tracker === 3) {
    return `loops ${arg}`
  }
  return callMe('anytime')
}

console.log(callMe()) //loops anytime



//recursive loop
const recursiveLoop = (n) => {
  console.log(n)
  if (n <= 1) {
    return 'complete'
  }
  else {
    return recursiveLoop(n-1)
  }
} 

recursiveLoop(3)// 3, 2, 1           //aqui não logamos o valor do return na tela.
console.log('-----------------------------')
console.log(recursiveLoop(3)) //3, 2, 1, complete  //por causa do valor retornado, que só é mostrado se usarmos o console.log




//FACTORIAL with a loop
function computeFactorial(num) {
  var result = 1
  
  for (let i = 2; i <= num; i++) { // '<=' LEMBRAR, que o número que foi input tb conta.
    result *= i
  }
  return result
}

console.log(computeFactorial(5))

















