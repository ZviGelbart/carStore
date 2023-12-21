import React, { useEffect, useState } from 'react'
import Category from '../Category'
import './categoreis.css'

export default function Categoreis({setCategoryId}) {
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('http://ec2-52-203-207-234.compute-1.amazonaws.com:8443/api/category')
      .then(r => r.json())
      .then(data => {
        setCategory(data)
      })
  })

  const handleClick = (id)=>{
    const url = 'http://ec2-52-203-207-234.compute-1.amazonaws.com:8443/api/category/'+id
    
    setCategoryId(url)
  }

  return category.map((c) => (
    <div key={c.id}className='categories'>
      
      <Category key={c.id} item={c} handleClick={handleClick}/>
    </div>
  ))

}
