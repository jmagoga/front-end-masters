//Depth first traversal

//As you can see, it depends on what you're doing on which of these you use. 
//For a sorted list out of a BST, you'd want to use inorder. 
//If you're making a deep copy of a tree, preorder traversal is super useful since you'd copy a node, 
//and then add its left child and then its right tree. 
//Postorder would be useful if you're deleting a tree since you'd process the left tree, 
//then the right, and only after the children had been deleted would you delete the node you're working on.

//serialize the entire tree into a flat data structure. (tipo transformar em um array)

//get as far away from the root node as possible as quickly as possible

//if you want a sorted list out of a binary search tree (BST) then you use an inorder traversal

//to create a deep copy, use a pre ordered traversal

// pre-order traversal. The basic gist is that for each of the nodes, 
//you process the node (in our case, save it to an array since we're serializing this tree,) 
//then process the left subtree and then the right tree



//Given the above tree:

//Call our method (let's call it preorderTraverse) on the root node, 8.
//Add 8 to our array.
//Call preorderTraverse on the left child, 3.
//Add 3 to our array.
//Call preorderTraverse on the left child, 1.
//Add 1 to our array.
//Has no children, returns.
//Going back up the tree, we'll call preorderTraverse on 6.
//Add 6 to our array.
//Call preorderTraverse on the left child, 4.
//Add 4 to our array.
//No children, returns.
//Going back up the tree, we'll call preorderTraverse on 7.
//Add 7 to the array.
//So on and so forth.
//We end up with the array of [8, 3, 1, 6, 4, 7, 10, 14, 13]. This is called preorder traversal.

const preorderTraverse = (node, array) => {
  if (!node) return array
  array.push(node.value)//process the node
  array = preorderTraverse(node.left, array) //process left tree
  array = preorderTraverse(node.right, array) //process right tree
  return array
}


//In preorder traversal, you process the node, then recursively call the method on the left subtree and then the right subtree.

//In inorder traversal, you first recursively call the method on the left tree, then process the node, and then call the method on the right tree.

//Postorder traversal, as you have guessed, you recursively call the method on the left subtree, then the left subtree, then you process the node. The results of these are as follows:
//in POSTORDER: first add all chidren then yourself

// preorder
[8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
[1, 3, 5, 6, 7, 8, 10, 13, 14]

// postorder
[1, 4, 7, 6, 3, 13, 14, 10, 8] //first add all chidren then yourself (that's why 8 is added last, it's the root)


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
//the gist of when you use them is that you know the answer for what you're looking for is "closer" to the root node 
//as opposed to far away when you would use depth-first. Again, it's all trade-offs.

///want to stay close to the root node (as opposed to depth first)
//doesn't make much sense to use it in a binary search tree

//Breadth-first isn't recursive processing of subtrees like depth-first. 
//Instead we want to process one layer at a time. Using the tree above,
// we want the resulting order to [8, 3, 10, 1, 6, 14, 4, 7, 13]. 
//In other words, we start at the root, and slowly make our way "down" the tree.

//one layer at a time, from left to right

//a queue is going to be used

//add 8, process that, add 3 and 10 in there, 
//then im going to dequeue the next one which's 3, then add one and six to othe queue. 
//process 3, and then dequeue the next thing
//next thing in the queue is 10
//olhar imagem aqui https://btholt.github.io/four-semesters-of-cs-part-two/tree-traversals
//https://frontendmasters.com/courses/computer-science-2/breadth-first-traversal-solution/

//What we're going to do is process the node, then add the left child to the queue and then add the right child to the queue.
// After that, we'll just dequeue an item off of the queue and call our function recursively on that node. 
//You keep going until there's no items left in the queue.

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
