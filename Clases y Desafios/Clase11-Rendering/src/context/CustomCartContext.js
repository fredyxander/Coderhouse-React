import { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);

    // agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity)=>{
        const newProduct = {
            item,
            quantity
        }
        setProductosCarrito([...productosCarrito, newProduct]);
    }

    // Remover un item del cart por usando su id
    const removeItem = (itemId)=>{

    }

    // Remover todos los items
    const clear = ()=>{

    }

    // valida si un producto ya existe en el carrito
    const isInCart = (id) =>{

    }

    return(
        <CartContext.Provider value={{productosCarrito, addItem}}>
            {children}
        </CartContext.Provider>
    )
}