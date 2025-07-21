import React from 'react'
import { useState } from 'react'



const App = () => {

  const [state, setState] = useState(0);
  return (
    <div>

    <h1>You have enter {state} times</h1>
    <button onClick={()=> {
      setState(state +1);
    }}> Increment</button>

    <button onClick={()=>{
      if (state > 0){
      setState(state -1);
      }
    }}>Decrement</button>

    <button onClick={()=>{
      setState(0);
    }}>RESET</button>
  </div>
  )
}

export default App