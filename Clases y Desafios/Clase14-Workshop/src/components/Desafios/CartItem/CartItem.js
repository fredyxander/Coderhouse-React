import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import './CartItem.css';

export const CartItem = ({productoProp})=>{
    console.log('productoProp',productoProp)
    const carritoContext = useContext(CartContext);
    return(
        <div className="cartItem-card" >
            <p><strong>Producto: {productoProp.item.title}</strong></p>
            <div className="cart-item-info" >
                <img src={productoProp.item.pictureUrl} alt="imagen"/>
                <p>Precio: $ {productoProp.item.price} usd</p>
                <p>Cantidad: {productoProp.quantity}</p>
                <button onClick={()=>carritoContext.removeItem(productoProp.item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}