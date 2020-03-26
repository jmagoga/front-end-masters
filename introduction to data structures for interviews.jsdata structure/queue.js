class Queue {
  constructor() {
    this._storage = {}
    this._length = 0
    this._headIndex = 0
  }
  enqueue(value) { //instead of 'push'             //ask interviewer if they want me to return something
    const lastIndex = this._length + this._headIndex
    this._storage[lastIndex] = value // enteder por que... https://frontendmasters.com/courses/data-structures-interviews/queue-enqueue-dequeue/  -2:00
    this._length++
  }
  dequeue() { //remove value from the front
    if (this._length) {
      const first = this._storage[this._headIndex]
      delete this._storage[this._headIndex]
      this._length--
      this._headIndex++
      return first
    } else {
      return undefined
    }
  }
  peek() {
    
  }
}

const myQ = new Queue() 
myQ.enqueue('pushed to the back')
myQ.enqueue('pushed to the back again')
myQ.dequeue()
