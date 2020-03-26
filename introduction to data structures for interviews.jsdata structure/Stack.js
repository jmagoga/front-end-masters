class Stack {
  constructor() {
    this._storage = {}
    this._length = 0
  }
  push(value) {
    this._storage[this.length] = value
    this._length++
  }
  pop() {
    if (this._length) {
      const last = this._storage[this._length-1]
      this._storage[this._length-1] = undefined //same as deleting
      //delete this._storage[this._length-1]   //usar o 'delete' eh praticamente o mesmo que setar para undefined
      this._length--
      return last
    } else {
      //throw an error? how would you want this implemented // or just return undefined as an array so that API's are similar (API, how you interact with it)
    }
    
  }
  peek(){ //always peek that last one
    if (this._length) {
      return this._storage[this.length-1]
    } else {
      return undefined
    }
    
  }
}

const myStack = new Stack

console.log(myStack)

myStack.push('queijo')

console.log(myStack)
