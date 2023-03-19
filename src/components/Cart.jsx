import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {cart, clear, removeItem, totalCart, sumaTotalCart} = useContext (CartContext);


  if (totalCart () === 0) {
    return (
      <div className='container'>
          <div className='row p-3'>
            <div className='col md-12'>
              <div className="alert alert-danger text-center" role="alert"> El carrito esta vacio</div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <div className='container my-5'>
      <div className='row'>
        <h1 className='text-center'>Productos Seleccionados</h1>
        <div className='col md-12'>
          <table className='table'>
            <tr>
              <td className='text-end' colSpan={5}><Link className='btn btn-warning bg-warning' onClick={() => {clear()}}>Vaciar carrito</Link></td>
            </tr>
            {
              cart.map (item =>
                <tr key={item.id}>
                  <td className='text-start' width="10%"><img src={item.imagen} alt={item.nombre} /></td>
                  <td className='text-start' width="30%">{item.nombre}</td>
                  <td className='text-start' width="20%">{item.quantity} x ${item.precio}</td>
                  <td className='text-start' width="20%">{item.quantity * item.precio}</td>
                  <td className='text-end' width="20%"><button type='button' className='btn btn-warning bg-warning' onClick={() => {removeItem (item.id)}} title={"Eliminar Producto"}><img src='../images/trash.svg' alt={"Eliminar producto"}/></button></td>
                </tr>
              )
            }
            
            <tr>
              <td colSpam={2}>&nbsp;</td>
              <td className='text-center'><b>Total a Pagar</b></td>
              <td className='text-center'><b>${sumaTotalCart()}</b></td>
              <td className='text-end'><Link to={"/checkout"} className='btn btn-warning bg-warning'>Finalizar Compra</Link></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart;