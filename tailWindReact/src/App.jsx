import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {name:"vivek",room:303};
  return (
    <>
      <h1 className= 'bg-green-400 text-black p-10 rounded-xl mb-5'>hello vivek</h1>
      
      <Card laptop="vivek" />
      <Card obj ={myObj}/>
    </>
  )
}

export default App
