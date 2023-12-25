
import './App.css'
import Login from './Login'
import Header from './Header'
import Layout from './Layout'
import Footer from './Footer'
import UsersTables from './UsersTables'



function App() {
  return (
    <div className='firstDiv'>
       <Login/> 
      {/* <div id='head'><Header/></div>
      <div id='layo'><Layout /></div>
      <div id='foot'><Footer/></div>  */}
      <UsersTables/>
    </div>
    
  )
}

export default App
