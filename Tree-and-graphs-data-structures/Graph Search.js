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
      const current = nodeStack.pop()
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
}
