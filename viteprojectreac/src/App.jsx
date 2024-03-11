import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15)

  const addValue = () => {0
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () =>{
    setCounter(Counter - 1)
  }
  return (
    <>
      <h1>Hello Dhruv Darji:)</h1>
      <h2>Counter value: {Counter}</h2>

      <button
      onClick={addValue}
      >Add value {Counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {Counter}</button>
      <p>footer: {Counter}</p>
    </>
  )
}
 
export default App



