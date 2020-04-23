useEffect is disconnected from when the renders happen

it schedules the function to happen affter the render happens

tudo é renderizado antes, o que tem dentro do useEffect é renderizado depois.

usado para nao demorar para mostrar tudo na tela. se tu deixa aquela chamada pra API sem o useEffect, ele nao vai renderizar nada
até que aquele chamada é resolvida. por isso, se schedule essa chamada pra ser depois que a pagina inteira ja renderizou
