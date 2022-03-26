import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartItem = ({productoProp})=>{
    console.log('productoProp',productoProp)
    const carritoContext = useContext(CartContext);
    return(
        <div style={{display:"flex", justifyContent:"center", flexFlow:"column", background:"pink", margin:"10px"}}>
            <p>Producto: {productoProp.item.name}</p>
            <div style={{display:"flex", justifyContent:"flex-start", flexFlow:"row"}}>
                <img style={{width:100, height:100}} src={productoProp.item.pictureUrl} alt="imagen"/>
                <p>Precio: {productoProp.item.price}</p>
                <br/>
                <p>Cantidad: {productoProp.quantity}</p>
                <br/>
                <button onClick={()=>carritoContext.removeItem(productoProp.item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}