import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext (CartContext);

    const onAdd = (quantity) =>{
        addItem (item, quantity);
    }
  return (
    <div className= "container">
        <div className="row">
            <div className="col d-flex align-items-center justify-content-end">
                <img id='ramillete' src= {item.imagen} alt= {item.imagen}/>
            </div>
            <div className="col d-flex align-items-center">
                <div>
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <p><b>stock: {item.stock}</b></p>
                    <h5>Informacion del producto</h5>
                </div>
                <ItemCount stock={item.stock} onAdd ={onAdd}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail