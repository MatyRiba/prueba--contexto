import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Gracias = () => {
    const {orderId} = useParams();

    return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col md-12 text-center'>
                {orderId ? <div class="alert alert-success text-center" role="alert"><h3>Gracias por tu Compra</h3><p>Se ha generado una Orden de Compra con el ID: <b>{orderId}</b></p></div> :""}
                <Link to={"/"} className="btn btn-success">Volver al Menu Principal</Link>
            </div>
        </div>
    </div>
    )
}

export default Gracias;
