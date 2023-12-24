import { Link } from 'react-router-dom'
import './car.css'

export default function index({item}) {
  return (
    <Link  to={"/car/"+item.modelId}>
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
