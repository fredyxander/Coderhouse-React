import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartContainer = () => {
  const {productCartList, deleteProduct} = useContext(CartContext);
  console.log('productCartList',productCartList)

  return (
    <div>
      <p>CartContainer</p>
      {
        productCartList.map(item=>(
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={()=>deleteProduct(item.id)}>Eliminar producto</button>
          </div>
        ))
      }
    </div>
  )
}
