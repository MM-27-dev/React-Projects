import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter,setCounter] = useState(0);
  //first value is = variable
  //sec value is function
  // let counter = 15

  const addValue = () =>{
     setCounter((preCounter)=> preCounter + 1)
     setCounter((preCounter)=> preCounter + 1)
     setCounter((preCounter)=> preCounter + 1)
     setCounter((preCounter)=> preCounter + 1)
    //Setconuter method accepts the callback, because of using callback 
    //that means there is a guarantee the call back need to finish and state is returning the values

    //  setCounter(counter+1)
    //  setCounter(counter+1)
    //  setCounter(counter+1)
    //  setCounter(counter+1)

     //Batching - react doesn't send the things immediately when you perform an action/state, 
     // but actually bundles everything together (behind alogorithm called reconciliation) 
  }

  const removeValue = ()=>{
    setCounter((preCounter)=>preCounter - 1)
    setCounter((preCounter)=>preCounter - 1)
    setCounter((preCounter)=>preCounter - 1)
  }

  return (
    <>
      <h1>React course with Monika {counter}</h1>
      <h2>Cunter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
