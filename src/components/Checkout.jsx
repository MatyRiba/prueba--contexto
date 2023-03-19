import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const {cart, clear, sumaTotalCart} = useContext (CartContext);

    const generarOrden = () => {
    const buyer = {name:nombre, email:email, phone:telefono};
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${fecha.getMonth()+ 1}-${fecha.getDate()}-${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    const order = {buyer:buyer, items:{cart}, date:date, total:sumaTotalCart()};

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc (ordersCollection, order).then(data => {
                    setOrderId (data.id);
                    clear();
        });
    }

    return (
    <div className='container my-5'>
        <div className='row'>
            <h1 className='text-center mb-5'>Finalizar Compra</h1>
        <div className='col md-3'>
        <form>
        <div class="mb-3">
            <label htmlfor="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre (e.target.value)}}/>
            </div>
            <div class="mb-3">
            <label htmlfor="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" onInput={(e) => {setEmail (e.target.value)}}/>
            </div>
            <div class="mb-3">
            <label htmlfor="telefono" class="form-label">Telefono</label>
            <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono (e.target.value)}}/>
            </div>
            <button type="button" class="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
        </form>
            </div>
        <div className='col md-9'>
            <table className='table'>
            {
                cart.map (item =>
                <tr key={item.id}>
                    <td className='text-start' width="10%"><img src={item.imagen} alt={item.nombre} /></td>
                    <td className='text-start' width="40%">{item.nombre}</td>
                    <td className='text-start' width="20%">{item.quantity} x ${item.precio}</td>
                    <td className='text-start' width="20%">{item.quantity * item.precio}</td>
                </tr>
                )
            }
            
            <tr>
                <td colSpam={2}>&nbsp;</td>
                <td className='text-center'><b>Total a Pagar</b></td>
                <td className='text-center'><b>${sumaTotalCart()}</b></td>
            </tr>
            </table>
        </div>
        </div>
            {orderId ? <Navigate to={"/gracias/" + orderId} /> : ""};
    </div>
    )
}

export default Checkout;