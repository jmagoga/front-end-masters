linked lists --> organises itens sequentially, with each item storing a pointer to the next

fast operation on the ends
costly look ups

sequential data structure

'find' for a list is bad (the searching part).

linked lists are almost always underneath the hood of a stack or queue
hash tables often use linked lists to avoid collisions

think of it as a nested object (it's actually a pointer)

in a singly linked list, we only have a value that points to next, no value that points to previous
in a doubly linked list, we also have a value that points to previous! often not used in interviews... but you should ask!

interviewers will wnt a singly linked list

const linkedList = {
  head: {
    value: 1
    next {
      value: 2
      next: {
        value: 3
        next: null
      }
    }
  }
}



in the head, it could be null or even point to the tail

to change the pointer, just reassign it to other node

use cases:
