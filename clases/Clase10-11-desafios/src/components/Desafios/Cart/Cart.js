import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const Cart = ()=>{
    const carritoContext = useContext(CartContext);
    const productosCarrito = carritoContext.productosCarrito;
    console.log('productos Carrito', productosCarrito);

    return(
        <div>
            <p>cart container</p>
            {
                productosCarrito.map(producto=>(
                    <CartItem key={producto.item.id} productoProp={producto}/>
                ))
            }
            <button onClick={carritoContext.clear}>Vaciar carrito</button>
        </div>
    )
}