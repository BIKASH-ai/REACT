import React from 'react'
import UserCard from './Components/UserCard'
import './Components/UserCard.css'
import pic from './assets/pic.png'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <UserCard name = "Bikash1" description = "Software Enginer" img ={pic}/>
      <UserCard name = "Bikash2" description = "Crickter" img ={pic}/>
      <UserCard name = "Bikash3" description = "Civil Servent" img = {pic}/>
    </div>
  )
}

export default App