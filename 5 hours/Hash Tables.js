sempre bom ter HASH TABLE na cabeça para resolver qqr problema q perguntarem (gayle laakman mcdowel)

key value lookup

very fast for lookups, delete and adds bigO(1)

not useful for stuff with order

if you need sets or maps, that's a good way to go


como funciona. tu pega uma string, ex 'John' e passa numa funçao de hash. isso vai dar um numero. poe 'John' nesse numero
depois pra accessar esse numero, é só usar a hash table de novo com 'john' para acessar o local (index)

class HashTableSet {
  constructor() {
    this.table = new Array(255)
  }
  add(input) {
    this.table[this.hash(input, 255)] = input
  }
  check(input) {
    return !!this.table[this.hash(input, 255)]
  }
  hash(input, max) {
    let num = 0
    for (let i = 0; i < input.length; i++){
        num += input.charCodeAt(i) * i     //input.charCodeAt(i) 
    }
    return num % max
  }
}



//outra função de hash (do cs50) https://www.youtube.com/watch?v=nvzVHwrrub0

function hash(string) {
  let sum = 0;
  for (let j = 0; string[j] != '\0'; j++) { //string[j] != '\0'; mesma coisa w dizer que he menor que string.length
    sum += string[j]  
  }
  return sum % ______?
}
  
//pode ser q haja um colisao, ai uma maneira eh por o string numero dps daquele que eh igual
//talvez poderia ser uma linked list ali dentro da hash table
  //ai usa 'chaining', qnd tem o mesmo indice, so usa um pointer para o next.

