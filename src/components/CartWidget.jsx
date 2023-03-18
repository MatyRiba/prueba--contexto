import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {totalCart} = useContext (CartContext);
  
  return (totalCart () > 0) ?
    <Link to={"/cart"} className="btn btn-light position-relative">
      <img src="../images/shopping-cart.png" alt="" /> 
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{totalCart()}</span>
    </Link> : "";
}

export default CartWidget