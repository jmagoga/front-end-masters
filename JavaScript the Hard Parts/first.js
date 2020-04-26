//quase mesma coisa q implementar map
function copyArrayAndManipulate(arr, instruction) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(instructions(arr[i]))
  }
  return output
}

//ai temos outra função
const multiplyBy2 = input = input * 2

//obviamente podemos passar ela como callback
copyArrayAndManipulate([1, 2, 3], multiplyBy2)

//mas tb nao precisamos definir a função!!!
copyArrayAndManipulate([1, 2, 3], input => input * 2)
