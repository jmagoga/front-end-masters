//imagina que tu quer deletar um monte da lista... isso é ruim.
//se tu precisa só acessar uma coisa (get) é ótimo.

//LinkedList é boa para delete e por coisas no meio e tal. mas LinkedList é ruim para ler


//ARRAYLIST
imagina que tu tem um array

['foo', 'bar', 'baz', 'what', 'ever'] e tu deleta 'bar' (indice 1). todos os elementos da direita tem que mover
                                      para a esquerda um local (pensa nisso na memoria (cs50 malan), 
                                      cada espacinho indo 1x para o lado)
                                      
ou se tu vai adicionar um elemento ali antes de 'bar', tu tem que mover tudo para a direita 1x. isso é bem caro!!!
nos queremos que elas sejam rapidas

lookups is fine. goes straight to whereer it needs to go


OPTIMIZED for gets, but DEOPTIMZED for deletes and inserts

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {}
  }
  push(item) {
    this.data[this.length] = item
    this.length++
  }
  pop() {
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return lastItem
  }
  get(index) {
    return this.data[index]
  }
  delete(index) { //delete is very expensive. shifting everything one place in memory!
    const ans = this.data[index];
    this._collapse(index)
    return ans
  }
  _collapse(index){
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
  }
}

var teste = new ArrayList

teste.push("Julio")
teste.push("Hermes")
teste.push("Heron")
teste.push("Sandra")
console.log(teste) //{"length":4,  "data":{"0":"Julio","1":"Hermes","2":"Heron","3":"Sandra"}}
teste.pop()
console.log(teste)//{"length":3,   "data":{"0":"Julio","1":"Hermes","2":"Heron"}}
teste.delete(0)
console.log(teste)//{"length":2,   "data":{"0":"Hermes","1":"Heron"}}

