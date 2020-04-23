toda vez que tu mexe num input, o React vai fazer rerender do componente inteiro, por isso que volta ao normal 
(quando se está trabalhando com um form por exemplo.)

por isso, usamos o setState para manter estado.

exemplo, manter estado de uma localização
const [location, setLocation] = useState('') //'' default location

//mudamos o valor de algo no estado com o onChange

<input
        //onChange recebe um 'e', evento, e dele tiramos o target.value para atualizar o estado.
  onChange(e => setLocation(e.target.value))
/>
