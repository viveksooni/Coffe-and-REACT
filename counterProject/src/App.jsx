import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  

  const addValue = ()=>{
    count++;
    setCount(count)
    console.log(count);
  }
  const removeValue = () =>{

    count--;
    setCount(count);
    console.log(count);
  }

  return (
    <>

      <h1>Counter</h1>
      <h1>{count}</h1>

      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
