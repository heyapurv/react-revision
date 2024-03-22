import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () =>{
    // counter = counter +1;
    // setCounter(counter+1) or
    if(counter<30){setCounter(counter+1)}
   
  }
  const removeValue=()=>{
  // counter = counter - 1; doesnt work as it is const of counter and set counter use let instead if you want to use this 
  if(counter>0){setCounter(counter-1)}
  }
  return (
    <>
      <h1>Counter Project 1 </h1>
      <h1>{counter}</h1>
      <button onClick={addValue}>Increase</button>
      <br/>
      <br />
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
