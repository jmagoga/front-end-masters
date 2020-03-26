stacks & queues

ordered data structures with opinions on how things get in and out

a stack has been implemented using an array... array = stack

queue - contiguous block of memory. next to each other. in javascript there's a dynamic array. 
when pushing and unshifting -- if you want array indices to be correct
time complexity of unshift -- typically its LINEAR, for every item in the list, some work needs to be done that's the
same as the length of that list. it grows in a linear fashion
unshift -- linear... however it's not always the case depending on implementation
we use them as they're really fast at what they're do.
unshift is usually optimizeed in modern browsers, but they can be implemented with a linked list!

example of a stack: a back button or undo button --> it'll pop off the most recent changes

common interview question!!! implement a back button!!! USE A STACK!!!
