//optimizado. ele avisa se alguma troca foi feita. se não foi feita, o array esta sorted e não precisa continuar...

var swapped;
do {
  swapped = false //if we dont swap anything it just returns.
  for (var i = 0; i < array.length; i++) {
    if (array[i] && array[i+1] && array[i] > array[i + 1]) {
      swap(array, i, i + 1)
      swapped = true
    }
  }
} while (swapped)
