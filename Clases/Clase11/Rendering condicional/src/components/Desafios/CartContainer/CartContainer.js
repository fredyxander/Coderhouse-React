import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const CartContainer = () => {
  const {productCartList} = useContext(CartContext);

  return (
    <div>
      <p>CartContainer</p>
      {
        productCartList.map(item=>(
          <CartItem key={item.id} item={item}/>
        ))
      }
    </div>
  )
}
