import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import './Cart.css';

export const Cart = ()=>{
    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito;
    console.log('productos Carrito', productosCarrito);

    return(
        <div>
            <p>cart container {carritoContext.nombreUsuario}</p>
            {
                productosCarrito.length>0 ?
                <>
                    {
                        productosCarrito.map(producto=>(
                            <CartItem key={producto.item.id} productoProp={producto}/>
                        ))
                    }
                    <div className='empty-cart'>
                        <p>Total: {carritoContext.getTotalPrice()}</p>
                        <button onClick={carritoContext.clear}>Vaciar carrito</button>
                    </div>
                </>
                :
                <div>
                    <p>No hay productos</p>
                </div>
            }
        </div>
    )
}