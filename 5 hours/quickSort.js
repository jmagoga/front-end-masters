//another divide and conquer

takes up less memory than mergeSort. however, if  sorted list is passed, it does veeery poorly
(everything gets compared to everything as one side is blank. n2

Big O of (n log n)

//pega o último número da lista como o 'pivot. esse último número vai ser o 'meio' da lista,
//tudo menor que ele vai pra esquerda, tudo maior, pra direita... recursivamente
//depois, se junta a lista da esquerda, com o pivot, com a da direita

//ex:
[4, 8, 1, 3, 7, 6] //---> pivot é o '6', ai divide-se em [1, 3, 4] 6 [7, 8].

//repete-se o processo depois

na lista [1, 3, 4], o '4' é o pivot... e assim por diante. quando tem só 1 numero, retorna-se outro empty array

pivot never gets passed down!!!

