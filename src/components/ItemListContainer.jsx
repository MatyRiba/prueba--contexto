import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const {id} = useParams ();
      
      
      useEffect (() =>{
        const db = getFirestore ();
        const itemsCollection = collection (db, "productos");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs (filter).then(elements => {
          setItems(elements.docs.map(element =>({id:element.id, ...element.data()})));
        });
          
      }, [id]);
      
      
  return (
    <div className='container'>
      <ItemList items = {items}/>
    </div>
    
  )
}

export default ItemListContainer