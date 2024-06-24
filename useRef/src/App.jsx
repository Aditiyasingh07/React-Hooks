import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {

  const [value, setValue] = useState(0)

  const count = useRef(0)
  console.log(count);

  useEffect(()=>{
    count.current = count.current+1;
  })

  return (
    <>
      <button onClick={()=>{setValue(prev=> prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev => prev+1)}}>+1</button>
      <h2>Render Counter: {count.current}</h2>
    </>
  )
}

export default App

// useRef is a react hook that allow as to create mutable variables,which will not re-render the component and its also uses for accessing DOM elements.