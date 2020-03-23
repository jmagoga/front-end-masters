SLOW (n^2) (quadratic) if we compare all the numbers to one another (nested loops)
(n) (linear) if you're looping over all of the numbers once (single loop)
(2n) (linear) if we run through all the numbers two times (you do two loops, separately, each which goes over all of the nums)
(2) if we only do 2 operations despite the number of input (goes directly to the source, if you have to do two operations, find min and max, e.g.)
FAST (1) (constant) one operation, tipo o find index 0


FAST (log n) logarithmic (geralmente divide and coquer ????) 
SLOW (k^n) exponential

(n log n) -- linear * logarithmic



ordem de time complexity
(1), (log n), (ao quadrado N), (n), (n^2), (n^3), (n^n)


shift(), unshift() --> linear. tu add uma coisa mas move todos os outros itens do array pro lado 'n' times.

reduce is linear ('n', it's just a loop under the hood), but the callback passed in has to be taken into account

it depends on what's happening inside of a loop, for example
                  
                  
O(log n) looping thru an array, adn every time you loop you cut the problem in half, or third (some fraction), the time is logarithmic, cut in half
the time complexity increases at a fraction. better than linear time!
  
O(n log n) happens when you have a loop, you have a linear loop and also looping in and cutting it in half.
tipo ter um loop que dentro dele tem um mergeSort (que cut in half)






O(1) running a statement
O(1) lookup in array
O(log n) loop that cuts problem in half every iteration
O(n) loop
O(n^2) 2 nested loops (bem diferente de 2n, que sao 2 loops NAO nested)
O(n^3) 3 triple nested loop


be mindful of what's 'n' !!!



Big O is THE WORST CASE SCENARIO -- Computer scientists are pessimist






SPACE COMPLEXITY
(the space it takes up in memory)
if you're copying an array 5 times, than you have 5 arrays in your memory that's not good
