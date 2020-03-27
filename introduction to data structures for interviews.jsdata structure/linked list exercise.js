class LinkedList {
  constructor(value) {
    this.head = {value, next: null} //same as saying 'value: value', shorthand.
    this.tail = this.head //they point to the same object in memory
  }
  insert(value) {
    //update head and tail as needed. only update head if it's null
    const node = {value, next: null} //cria um novo node
    this.tail.next = node //primeiro, pega o next do atual tail e poe esse novo node como next
    this.tail = node //transforma o tail no node (agora é esse, o último que foi adicionado)
  }
  remove() {
    
  }
  removeTail() {
    
  }
  contains() { //linear
    
  }
  isHead() { //constant time
    
  }
  isTail() { //constant time
    
  }
}

const list = new LinkedList(1) //not taking any value (nothing in the constructor) //should I initiate it with a value or empty
console.log(list)
list.insert(2)
console.log(list)
list.insert(3)
console.log(list)
