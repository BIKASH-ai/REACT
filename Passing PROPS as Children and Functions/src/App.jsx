import React from 'react'
import Card from './Components/Card'
import Button from './Components/Button'
import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }
  return (
    <div className='App'>
      
    <Button handleclick = {Increment} text= "Increment" className = "Button"><h1>Count: {count}</h1>
 </Button>
    <Button handleclick  = {() => setCount(count -1)} text = "Decrement" className="Button"><h1>Count: {count}</h1>
 </Button>
    
   {/* <Card>
    <h1>My name is Bikash</h1>
    <h2>My like to code</h2>
    <h3> I have good knowledge on Front- end Skills</h3>
  </Card>

  <Card>
    <h1>My name is Bikash2</h1>
    <h2>My like to code2</h2>
    <h3> I have good knowledge on Front- end Skills2</h3>
  </Card> */}
  </div>
  )
}

export default App