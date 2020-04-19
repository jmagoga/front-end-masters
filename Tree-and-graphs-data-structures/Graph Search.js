class Graph {
  constructor() {
    this.adjList = {}
  }
  
  addNode(node) {
    this.adjList[node] = []
  }
  
  depthFirstTraversal(startingNode,func = console.log) {
    //instantiate stack and list of visited nodes
    const nodeStack = []
    const visited = {}
    
    //node keeps track of visited nodes, BUT NOT 'EXPLORED' (gone thru all of the children)
    nodeStack.push(startingNode)
    visited[startingNode] = true
    
    while (nodeStack.length) {
      //we get the current node and all of its neighbors
      const current = nodeStack.pop() //removes the last item in     *****
      const neighbors = this.adjList[current]
      //and we log the current node
      func(current)
      
      neighbors.forEach(neighbour => 
         //if it's not visited, add it to the stack. (same operation as done above)
         if (!visited[neighbor]) {
           nodeStack.push(neighbor)
           visited[neighbor] = true
         }
                       )
    }
  }
  
  breadthFirstTraversal(startingNode, func = console.log) {
    const queue = []
    const visited = {}
    
    queue.push(startingNode)
    visited[startingNode] = true
    
    while (queue.length) {
      const current = queue.shift() //removes the first item in   *****
      const neighbors = this.adjList[current]
      func(current)
      
      neighbors.forEach(neighbor =>  {
        (!visisted[neighbor]) {
          queue.push(neigcnstruchbor)
          visited[neighbor] = true
        }
      } 
    }
  }
}


                        
                        
                        
                        
//binary search tree (https://frontendmasters.com/courses/trees-and-graphs/binary-search-solution/)
                        
//BST search --> O(h) --'h' is the height of the binary tree
class Node {
  constructor(value) {
    this.value=value
    this.left=null
    this.right=null
  }                        
}
                        
class BinarySearchTree {
  constructor() {
     this.root=null    
  }                
  insert(value) {
  
  }
  contains(value) {
  
  }
}
    
    
use BST when order is important. A HASH TABLE can be used to optimize pretty much anything!
                        
                        
