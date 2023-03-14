import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to ={"/item/" + item.id} className= "text-decoration-none text-dark">
    <div className="card m-4 border-0">
        <img id='imagenes' src={item.imagen} className="card-img-top" alt={item.nombre}/>
        <div className="card-body text-center">
            <p className="card-title">{item.nombre}</p>
        </div>
    </div>
    </Link>
  )
}

export default Item