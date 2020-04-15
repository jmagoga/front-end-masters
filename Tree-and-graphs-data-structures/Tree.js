//when we do new Tree, it's going to return an object that meets the constructor things

class Tree {
  constructor(value) //the value we're storing. a name, number...
  this.value = value
  this.children = [] //each node has children

  insertChild(value) { //can also pass a node here (which is a Tree already)
    const newTree = new Tree(value)
    this.children.push(newTree) //adiciona ao children do Tree original
    return newTree //not really needed. but it depends on what you want your API to do
  }
}

//e.g. de se fazer uma nova tree
const myTree = new Tree(1)
//{
//  value: 1,
//  children: []
//}
const myTree2 = myTree.insertChild(2)
const myTree2.insertChild(3) //inserindo dentro da tree dentro da tree (2 níveis abaixo)
