import { useState } from 'react'
import './App.css'
import Header from './Header'
import Layout from './Layout'
import Footer from './Footer'



function App() {
  return (
    <div className='firstDiv'>
      <div id='head'><Header/></div>
      <div id='layo'><Layout /></div>
      <div id='foot'><Footer/></div>
    </div>
    
  )
}

export default App
