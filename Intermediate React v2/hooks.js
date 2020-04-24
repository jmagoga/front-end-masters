//https://btholt.github.io/complete-intro-to-react-v5/
//****************************************************************
//cor dentro do componente (style)

<h1 onClick={() => setIsGreen(!isGreen)}
    style={{color: isGreen ? 'green' : 'crimson'}}
> 
  Texto
</h1>

//****************************************************************
//mostrar a hora a todo momento
const EffectComponent = () => {
  const [time, setTime] = useState(new Date())
  
  //schedules this to run later (o resto da função run all, this comes later)
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
      //qnd tem um setTimeout, tem que unmount ele
    return () => clearTimeout(timer)
  }) //n tem um 2º parametro. esse useEffect rerender toda vez que o setTimeout changes
    //se eu ponho uma dependencia, tipo um [], ele para de ficar atualizando, 'only run this on the very first time that I run this
    //ou por um [time] ai.    
  return <h1> { time.toLocaleString() } </h1> 
}

export default EffectComponent

//****************************************************************
//useReducer

//um reducer é uma função que pega estado antigo e devolve um novo estado
                                       //no useReducer, se passa uma função e um estado inicial
const [{r, g, b}, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0})
//devolve OBJECT(o current state da store). e ja da pra desestruturar com chaves. e
//tb da uma dispatch function, que te deixa dispachar uma action
const [{r, g, b}, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0})

case "INCREMENT_R":
  return Object.assign({}, state, { r: limitRGB(state.r + 50)})

CONTEXT API + USEREDUCER ----> basicamente redux
//*********************************************************************************************

//useMemo
//recebe uma função de como computar uma coisa recalcular e uma dependencia (q nem no useEffect)
const fibonacci = n => {
  if (n<=2) {
    return 1
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

const MemoComponenent = () => {
  const [num, setNum] = useState(1)
  const [isGreen, setIsGreen] = useState(true)
  const fib = useMemo(() => fibonacci(num), [num]) //it'll only recompute it when it's dependencies have changed
}


//tem tb 'memo' ue eh diferente de useMemo. tu memoiza uma coisa q a nao ser q essa coisa nao mude, tu não rerenderiza
//esse componente ai.



//*********************************************************************************************
//useCallback

hey this isn't changing. give me back the same function every single time

use useMemo and useCallback if you have a problem!!! no need to use them if you don't need them

//*********************************************************************************************
//useLayoutEffect
useful if you want to measure something in the DOM

//useImperativeHandle
(good for library authors). how you flip one way data flow (from child to parent)

