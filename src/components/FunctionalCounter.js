import { useState } from "react"

function FunctionalCounter (){
    const [counter, setCounter] = useState(0);
    const [varName, setName] = useState("Sumit pote");
    const increment = ()=>{
            setCounter(counter+1)
    }
    const decrement = ()=>{
            if(counter>0)
            setCounter(counter-1)
    }

    const changeName = ()=>{
        setName(varName)
    }
  return (
    <div>
        <h3>Value of the {counter}</h3>
        <h3>Name is {varName}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={changeName}>Click to print name</button>
    </div>
  )
}

export default FunctionalCounter