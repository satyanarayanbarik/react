import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(15)
  
  //let counter = 15

  const addValue = () => {

    console.log("clicked ",counter);
    //counter = counter + 1

    if(counter < 20){
      counter = counter + 1
    }
    else{
      setCounter(20)
      console.log("Cant exceed 20")
    }
    //setCounter(counter + 1)
    /*if (setCounter()<=20) {
      //  block of code to be executed if the condition is true
      setCounter(counter+1)
    } else {
      //  block of code to be executed if the condition is false
      conso
    }*/
    
    
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }
   
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      
      <br/>
      <button onClick={removeValue}>remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
