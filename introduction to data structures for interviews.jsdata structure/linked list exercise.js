class LinkedList {
  
  constructor(value) {
    this.head = {value, next: null} //same as saying 'value: value', shorthand.  //head é sempre o primeiro
    this.tail = this.head //they point to the same object in memory //o tail começa sendo o mesmo q o head, unica coisa na lista
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
    //loop and find node before tail (node.next === this.tail)
    //below, we'll traverse the linked list
    let currentNode = this.head
    while (currentNode.next !== this.tail) {  //when this condition is met we know it's the second to last node  //while it's not that, keep looping
      currentNode = currentNode.next //just so we don't have an inifinite loop
    }
    currentNode.next = null //we remove that node
    this.tail = currentNode //atualiza o tail para o penultimo node
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
list.removeTail()
console.log(list)
