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
