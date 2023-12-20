import React from 'react'
import './car.css'

export default function index({item}) {
  return (
    <div id=''>
    <div className="car" >
      {item.price+'$'}
      <br />
      {item.manufacture}
      
      </div>
    </div>
  )
}
