tem um head, dps aponta e aopnta e aponta e chega no tail

cada item na lista tem 2 coisas, o valor e o 'next', que é para onde aponta.

se formos buscar alguma coisa tipo find(), é mtoo expensive. ter que ir de um ponteiro para outro na memoria

mas se for deletar algo, é mto de boa, pq é só mudar o ponteiro de um para outro (troca o next)

aquele elemento que deixou de ser apontado, é garbage collected e se vai

muuuuito mais barato que deletar algo em um array, q depois tem que trocar todas as coisas de lugar na memoria

