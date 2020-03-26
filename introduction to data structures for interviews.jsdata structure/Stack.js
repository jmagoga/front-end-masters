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
    const last = this._storage[this._length-1]
    this._storage[this._length-1] = undefined //same as deleting
    //delete this._storage[this._length-1]   //usar o 'delete' eh praticamente o mesmo que setar para undefined
    this._length--
    return last
    
  }
  peek(){
  
  }
}

const myStack = new Stack

console.log(myStack)

myStack.push('queijo')

console.log(myStack)
