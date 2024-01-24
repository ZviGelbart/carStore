
import './App.css'
import Login from './Login'
import Header from './Header'
import Layout from './Layout'
import Footer from './Footer'
import UsersTables from './UsersTables'
import { useState } from 'react'



function App() {
  const [adduser, setAddUser] = useState({})
  return (
    <div className='firstDiv'>
       <Login setAddUser={setAddUser}/> 
      {/* <div id='head'><Header/></div>
      <div id='layo'><Layout /></div>
      <div id='foot'><Footer/></div>  */}
      <UsersTables adduser={adduser}/>
    </div>
    
  )
}

export default App
