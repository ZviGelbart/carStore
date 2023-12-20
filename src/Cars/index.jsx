import React, { useEffect, useState } from 'react'
import Car from '../Car'
import './cars.css'

export default function index(props) {
  const [defulltcars, setDefulltcars] = useState([])
  useEffect(()=>{
    fetch("http://ec2-52-203-207-234.compute-1.amazonaws.com:8443/api/category/8190e805-899a-471f-93fd-45dc7c7dbe58")
    .then(c=>c.json())
    .then(data=>{
      setDefulltcars(data)
    })
   } )
  return defulltcars.map((c)=>(
    <div>
       <div id='divCar'> <Car item={c}/></div>
    </div>
  ))
}

