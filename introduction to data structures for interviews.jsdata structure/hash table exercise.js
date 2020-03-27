class HashTable {
  constructor() {
    this._storage = []
  }
  insert() { //size... handle collision

  }
  remove() {
    
  }
  retrieve() {
    
  }
  _hash(str, n) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3
    }
    
    return sum % n
  }
  
} 
