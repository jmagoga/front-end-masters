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



//chatbot
class Tree {
  constructor(question) //the value we're storing. a name, number...
  this.question = question
  this.yes = null //each node has children
  this.no = null
  

  insertChild(question, side) { //can also pass a node here (which is a Tree already)
    const newQuestion = new Tree(question)
    this[side] = newQuestion
    return newQuestion //not really needed. but it depends on what you want your API to do
  }
}


//traversing a tree
let mother = {name: "Ashleigh"}
const son =  {name: "Sami"}
const daughter = {name: "Alex"}
mother = {
 name = "Ashleigh",
 children = [son, daughter],
}

function traverse(tree) { //if it's only one level, we just loop over it
  if(tree.children) {
    tree.children.forEach(child => console.log(child.name))
  }
}



//traversing nested trees
const family = {
  name: "Ash",
  children: [{
    name: 'Bowser',
    children: [{
      name: 'Picles',
    }],
  }],
  name: "Alex",
}

function traverse(tree) { 
  console.log(tree.name) //1. Ash, 2. Bowser, 3. Picles,   -->> na verdade da Alex, Bowser, Picles.
  tree.children.forEach(child => traverse(child))
}

traverse(family)





//binary tree

//yes e no nesse caso podem ser conhecidos como left e right
//aqui é um chatbot que tem, dentro do yes or no, uma question e um yes or no.
const chatBot = {
  question: 'Do you feel like cooking?'
  yes: {
    question: 'Do you have milk?',
    yes: <question>,
    no: <question>
  }
  no: {
    question: 'Do you have toast?',
    yes: <question>,
    no: <question>  
  }
}

class BinaryTree {
  constructor(question){
    this.question = question
    this.yes = null
    this.no = null
  }
  
  traverse(func) {
    func(this.question)
    if (this.yes) traverse(func)
    if (this.no) traverse(func)
  }
  
  contains(question) {
    if (this.question === question) return true 
    return (this.yes && this.yes.contains(question) ? true : false) || (this.no && this.no.contains(question) ? true : false)
  }
  //mesmo que fazer:
  // if (this.value === value) return true 
  //   return (this.left && this.left.contains(value) ? true : false) || (this.right && this.right.contains(value) ? true : false)
  
  //count recommendations
  countReccos(node) {
    if (node === null) return 0
  //check if these are leaves(no children)
    if (!node.yes && !node.no) {
      return 1 //if node has been found
    }
    //otherwise keep traversing
    return countReccos(node.yes) + countReccos(node.no)
  }
}


 
  
