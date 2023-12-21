import React from 'react'
import './Category.css'

export default function Category({ item, handleClick }) {
  

  

  return (

    <div className='catogoreis'>
      <div className='categoryItem' onClick={()=>{handleClick(item.id)}}>{item.name}</div>
      
    </div>

  )
}
