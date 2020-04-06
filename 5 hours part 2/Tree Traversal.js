//Depth first traversal

//get as far away from the root node as possible as quickly as possible

//if you want a sorted list out of a binary search tree (BST) then you use an inorder traversal

//to create a deep copy, use a pre ordered traversal

const preorderTraverse = (node, array) => {
  if (!node) return array
  array.push(node.value)//process the node
  array = preorderTraverse(node.left, array) //process left tree
  array = preorderTraverse(node.right, array) //process right tree
  return array
}

const inorderTraverse = (node, array) => {
  if (!node) return array
  array = inorderTraverse(node.left, array) //process left tree
  array.push(node.value)//process the node
  array = inorderTraverse(node.right, array) //process right tree
  return array
}

const postorderTraverse = (node, array) => {
  if (!node) return array
  array = postorderTraverse(node.left, array) //process left tree
  array = postorderTraverse(node.right, array) //process right tree
  array.push(node.value)//process the node
  return array
}



const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  };

it('preorderTraverse', () => {
    expect(preorderTraverse(tree, [])).toEqual([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]);
  });
  
  it('inorderTraverse', () => {
    expect(inorderTraverse(tree, [])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  
  it('postorderTraverse', () => {
    expect(postorderTraverse(tree, [])).toEqual([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]);
  });
});


//Breadth first
///want to stay close to the root node (as opposed to depth first)
//doesn't make much sense to use it in a binary search tree

//one layer at a time, from left to right

//a queue is going to be used

//add 8, process that, add 3 and 10 in there, 
//then im going to dequeue the next one which's 3, then add one and six to othe queue. 
//process 3, and then dequeue the next thing
//next thing in the queue is 10
//olhar imagem aqui https://btholt.github.io/four-semesters-of-cs-part-two/tree-traversals
//https://frontendmasters.com/courses/computer-science-2/breadth-first-traversal-solution/

//iterative way of doing this
if (!queue || !queue.length) return array

const breadthFirstTraverse = (queue, array) => {
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return array
}

//recursive way of doing this
const recursiveBreadthFirstTraversal = (queue, array) => {
  if (!queue.length) return array
  const node = queue.shift()
  array.push(node.value)
  if (node.left) queue.push(node.left)
  if (node.right) queue.push(node.right)
  return recursiveBreadthFirstTraversal(queue, array)
}


const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };
