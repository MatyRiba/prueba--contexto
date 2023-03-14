import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import arrayProductos from "../json/productos.json"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const {id} = useParams ();

    useEffect(() =>{
        const promesa = new Promise ((resolve) => {
        setTimeout(() => {
            resolve (arrayProductos.find(producto => producto.id === parseInt(id)));
        }, 2000);

        });
        promesa.then ((respuesta) => {
        setItem (respuesta);
        })

    }, [id]);
    

  return (
    <ItemDetail item = {item}/>
  )
}

export default ItemDetailContainer