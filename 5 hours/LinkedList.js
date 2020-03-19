tem um head, dps aponta e aopnta e aponta e chega no tail

cada item na lista tem 2 coisas, o valor e o 'next', que é para onde aponta.

se formos buscar alguma coisa tipo find(), é mtoo expensive. ter que ir de um ponteiro para outro na memoria

mas se for deletar algo, é mto de boa, pq é só mudar o ponteiro de um para outro (troca o next)

aquele elemento que deixou de ser apontado, é garbage collected e se vai

muuuuito mais barato que deletar algo em um array, q depois tem que trocar todas as coisas de lugar na memoria

push() --> grab the tail, point it to the new element. then change the 'tail' assignment

para fazer o pop(), da ate para keep track of the penultimate tail. ai deleta o que vem dps...

orr (and?) you have to make the second to last (the penultimate tail?) point to nothing (null), then it becomes the tail
     
keep track of the head to know the list. tail is even optional
     
class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(value) {
    const node = new Node(value)
    this.length++
    if (!this.head) {
      this.head = node //statement bem interessante. tudo em uma linha
    } else {
      this.tail.next = node;
    }
    this.tail = node
  }
  pop(value) {
    return this.delete(this.length-2)
  }
  _find(value, test=this._test) {
    let current = this.head
    let i = 0
    while(current) {
      if (test(value, current.value, i, current)) { //current.value = whatever node I am looking at. current is the node itself
        return current
      }
        current = current.next
        i++
    }
    return null // I didn't get what I was looking for
  }
  _test(a, b) {
    return a === b;
  }
  _testIndex(search, __, i) { //'__' means I don't care what this is, as I'm not referencing it later
    return search === i //did I find the correct index?
  }
  get(index) {
    const node = this._find(index, this._testIndex)
    if (!node) return null;
    return node.value
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next //para não deletar de cara a head, ela tem que apontar para algum lugar
      } else {
        this.tail = this.head = null
      }
      this.length--
      return head.value
    }
    const node = this._find(index-1, this._testIndex) //procurando pela coisa que está antes
    const excise = node.next //excise deleting
    if (!excise) return null //se nao tem nada para deletar, então não deleta
    node.next = excise.next //grab the node that is going to be delted, grab its next and make it the previous node's next
    if (node.next && !node.next.next) this.tail = node.next//2 hops
    this.length--
    return excise.value
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
  
}
