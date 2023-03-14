import React from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext(); 

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addItem = (item, quantity) => {
        if (isInCart (item.id)) {
            let position = cart.findId (element => element.id === item.id);
            cart[position].quantity += quantity;
            setCart ([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (itemId) => {
        const items = cart.filter (item => item.id !== itemId);
        setCart ([items]);
    }

    const clear = () => {
        setCart ([]);
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const totalCart = () => {
        return cart.reduce ((acc, item) => acc += item.quantity, 0);
    }

    const sumaTotalCart = () => {
        return cart.reduce ((acc, item) => acc += item.quantity * item.precio * item.precio, 0);
    }


return (
    <CartContext.Provider value={[cart, addItem, removeItem, clear, totalCart, sumaTotalCart]}>
    {children}
    </CartContext.Provider>
);

}

export default CartContextProvider;