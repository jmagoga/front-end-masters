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
