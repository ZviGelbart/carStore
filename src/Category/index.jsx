import React from 'react'
import './Category.css'

export default function Category({ item }) {

  return (

    <div className='catogoreis'>
      <div className='categoryItem'>{item.name}</div>
    </div>

  )
}
