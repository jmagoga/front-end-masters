//pensa nas conexoes em forma de matriz

//AJACENCY MATRIX

-    1 2 3 4 5

1    0 1 0 0 1       --> 1 conecta com 2 e 5                (1)-(2)
2    1 0 1 1 1       --> 2 conecta com 3, 4 e 5             |  / | \
3    0 1 0 1 0       --> 3 conecta com 2 e 4                | /  |  \ (3)
4    0 1 1 0 1       --> 4 conecta com 2, 3 e 5             |/   | /
5    1 1 0 1 0       --> 5 conecta com 1, 2 e 4             (5)-(4)


//1 is an edge, 0 is the lack of an edge

functin addEdge(v1, v2) {
  adjMatrix[v1][v2] = 1
  adjMatrix[v2][v1] = 1
}

//like you're representing what you like. suddenly you start to like eggs, you create that represntation

//delete an edge
functin deleteEdge(v1, v2) {
  adjMatrix[v1][v2] = 0
  adjMatrix[v2][v1] = 0
}







//adjacency List (to repesent a graph). uses a LinkedList

const adjList = {
1: [2, 5],
2: [1, 5, 3, 4],
3: [2, 4],
4: [2, 5, 3],
5: [4, 1, 2]
}

function addEdge(v1, v2) {
  adjList[v1].push(v2);
  adjList[v2].push(v1)
}

function removeEdge(v1, v2) {
  const v2Index = adjList[v1].indexOf(v2)
  const v1Index = adjList[v2].indexOf(v1)
  adjList[v1].splice(v2Index, 1)
  adjList[v2].splice(v1Index, 1)
}
