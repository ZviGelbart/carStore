import React from 'react'
import { Link } from 'react-router-dom'
import './car.css'

export default function index({item}) {
  return (
    <Link  to={"erer"}>
    <div id=''>
    <div className="car" >
      {'price:'+ item.price+'$'}
      <br />
      {'manufacture:'+ item.manufacture}
      <br />
      <button >🗑️</button>
      </div>
    </div>
    </Link>
  )
}
