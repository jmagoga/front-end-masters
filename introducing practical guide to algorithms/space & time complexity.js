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
