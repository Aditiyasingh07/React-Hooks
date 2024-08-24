import { useCallback, useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const newfu = useCallback(()=>{}, [])

  return (
    <>
      <Header newfu={newfu}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>
    </>
  )
}

export default App

// useCallback is a react hook that lets you cache a function definition between re-renders. its means, when we use the useCallback hook, it doesn't create multiple instance of same function when re-render happens. 