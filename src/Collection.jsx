import React from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useState, useEffect } from 'react';

const Collection = () => {
    const [products, setProducts] = useState ([]);
    console.log(products);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "Productos");
        getDocs (itemsCollection).then ((snapshot) => {
            const docs = snapshot.docs.map ((doc) => doc.data ());
        setProducts(docs);
        }) 
    }, [])

    
  return (
    <div>Collection</div>
  )
}

export default Collection