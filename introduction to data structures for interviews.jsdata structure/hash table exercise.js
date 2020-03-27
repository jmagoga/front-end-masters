//not implement hashtable on your own, use object, or Map or a Set

class HashTable {
  constructor(size) {
    this._storage = [] //to implement an array within an array instead of object inside of object
    this._tableSize = size
  }
  
  insert(key, value) { //size... handle collision
    const index = this._hash(key, this._tableSize)
          //this handles collision                 //se n precise cuidar da colisão, poderia simplesmente ser this._storage[index] = value, mas ai os valores que colidem iriam se sobrescrever
    //TODO: loop thru array and find if key was already inserted
    if (!this._storage[index]) this._storage[index] = [] //initializing a container array (because of collisions)
    this._storage[index].push([key, value]) //pushes an array inside of an array (w key and value) //ISSO ESTA **FORA** DO IF STATEMENT
  }                           //we push a key for when we do lookup later we can know which is associated with which
  
  remove() {
    
  }
  
  retrieve(key) {
    const index = this._hash(key, this._tableSize) //temos q hashear de novo para pegarmos o index.
    const arrayAtIndex = this._storage[index]
    
    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i]
        if (keyValueArray[0] === key) return keyValueArray[1]
      }
    }
  }
  
  //for whatever string you input it's going to give you the same input
  _hash(str, n) { //n --> the size of what we want our hash table to initially be. (the string gets hashed to a number between 0 and 'n')
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3
    }
    
    return sum % n //retorna um numero q sera usado como 'index' no 'insert'. ele sempre vai ser menor do que 'n' por causa do mod '% n' (25 nesse caso)
  }
} 

const myHT = new HashTable(25)

console.log(myHT)
myHT.insert('a', 1)
console.log(myHT)
myHT.insert('b', 2)
console.log(myHT)
console.log(myHT.retrieve('b'))

