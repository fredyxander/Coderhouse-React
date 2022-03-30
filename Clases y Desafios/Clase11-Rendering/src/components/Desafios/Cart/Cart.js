import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';

export const Cart = ()=>{
    const carritoContext = useContext(CartContext);
    console.log('productos Carrito', carritoContext.productosCarrito);

    return(
        <p>cart container</p>
    )
}