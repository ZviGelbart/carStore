
import { useNavigate } from 'react-router-dom'
import './Category.css'

export default function Category({ category }) {
  const nav = useNavigate()
  return (
<div className='categoryItem' onClick={()=>{nav('/categories/'+category.categoryId)}}>{category.categoryName}</div>
  )
}
