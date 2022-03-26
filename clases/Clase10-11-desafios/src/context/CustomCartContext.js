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
        console.log('newProduct',newProduct)
        setProductosCarrito([...productosCarrito, newProduct]);
    }

    // Remover un item del cart por usando su id
    const removeItem = (itemId)=>{
        console.log('itemId', itemId);
        const nuevosProductos = productosCarrito.filter(producto=>producto.item.id !== itemId);
        console.log('nuevosProductos',nuevosProductos)
        setProductosCarrito(nuevosProductos);
    }

    // Remover todos los items
    const clear = ()=>{
        setProductosCarrito([]);
    }

    // valida si un producto ya existe en el carrito
    const isInCart = (id) =>{
        //some
        //return valor
    }

    return(
        <CartContext.Provider value={{productosCarrito, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}