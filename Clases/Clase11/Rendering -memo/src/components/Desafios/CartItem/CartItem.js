import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {deleteProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}
