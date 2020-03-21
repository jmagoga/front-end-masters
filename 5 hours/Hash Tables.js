sempre bom ter HASH TABLE na cabeça para resolver qqr problema q perguntarem (gayle laakman mcdowel)

key value lookup

very fast for lookups, delete and adds bigO(1)

not useful for stuff with order

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
  hash(input, name) {
    let num = 0
    for (let i = 0; i < input.length; i++){
        num += input.charCodeAt * i
    }
    return num % max
  }
}
