import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../Category'
import './categoreis.css'

export default function Categoreis() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('http://ec2-52-203-207-234.compute-1.amazonaws.com:8443/api/category')
      .then(r => r.json())
      .then(data => {
        setCategory(data)
      })
  })


  return category.map((c) => (
    <div className='categories'>
      
      <Category key={c.id} item={c} />
    </div>
  ))

}
