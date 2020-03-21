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
