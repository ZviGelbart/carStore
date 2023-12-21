import { useEffect, useState } from 'react'
import Car from '../Car'
import './cars.css'

export default function Cars(props) {
  const [defulltcars, setDefulltcars] = useState([])

   useEffect(()=>{
    fetch(props.categoryId)
    .then(r=>r.json())
    .then(data=>{
      setDefulltcars(data)
      console.log(data);})
    },[props.categoryId])

  return defulltcars.map((c)=> {
    return (
      <div key={c.modelId}>
        <div  id='divCar'> <Car item={c}/></div>
      </div>
    )
  })
}

