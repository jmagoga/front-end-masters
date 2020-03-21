not LISTS

can be used to implement sets

store info very easy and get it very fast.

order is made by comparison

middle ground between arrayLists e linkedLists

each node has 0, 1 or 2 children, hence binary

everything to the left, is lesser than. everything t the right, is higher than

lookups are logarithmic

we can keep adding more thinkgs and the increases in time for that search are pretty small

adding is pretty simple as you just add a new pointer to point as sth

if you get to a place that doesn't have a child it just goes there

if it's duplicate, you just make the decision to always go to the right or always go to the left

lookups are bigO(log n)... to add a sortedList to a BST you can have bigO(n) 
(if you have a sortedList inserted, it's going to be a straight line in a sortedList)

having the data randomized is very important for a binary search tree
 
PRACTICAL USES: when you have ordered data and you need to search for nodes very very quickly. some databases are done with trees
even auto completes probably use trees

class Tree {
  constructor() {
    this.root = null
  }
  toObject() {
    return this.root
  }
  add(value) {
    if (this.root === null) {
      //no head, create new head
      this.root = new Node(value);
      return;
    }
    
    let current = this.root //this is the node we are CURRENTLY looking at
    while(true) { //ele vai acontecer quantas vezes precisarmos... até que a gente break ou return
      if (current.value > value) { //this node i'm inspecting atm, is your value grater than the value I am trying to find? then go left!!
        //go left
        if (current.left) { // if I have a left child, run the same process with my left child AS current
          current = current.left
        }
        else { //if I do not have a left child, you have found the spot you're supposed to insert this, and you're done!!! (faz isso criando um novo Node)
          current.left = new Node(value)
          return;
        }
      } else {
        //go right
        if (current.right) {
          current = current.right;
        } 
        else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
