import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)

  function cubenum(num) {
    console.log("Done!");
    return Math.pow(num, 3)
  }

  const result = useMemo(()=> cubenum(number), [number])

  return (
    <>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    <h1>Cube of the Number : {result}</h1>
    <button onClick={()=>{setCount (count+1)}}>Counter++</button>
    <h2>Counter Value is : {count}</h2>
    </>
  )
}

export default App

// The react useMemo hook returns a memoized value.(it's like caching a value so that it doesn't need to be recalculated.). The useMemo hook only runs of its dependencies gets updated.