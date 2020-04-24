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
