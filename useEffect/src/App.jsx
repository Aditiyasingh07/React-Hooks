
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count + 1)
    }, 3000)
  }, [])
  // Without [] the useEffect excute again and again
  // After add [] the useEffect excute only one time then stoped

  
  // This is Example 1
  // const addreandervalue = ()=>{
  //   setTimeout(()=>{
  //     setCount(count + 1)
  //   }, 2000)
  // } 

  // useEffect(() => {
  //   addreandervalue
  // }, [addreandervalue])

  return (
    <>
    <h1>I've rendered {count} Times!</h1>
    </>
  )
}

// Its use with Ex-1
/* <button onClick={addreandervalue}>Increse render value time by 2 sec after clicked the buttom</button> */

// The useEffect Hook allow you to perform side effects in your components.

export default App
