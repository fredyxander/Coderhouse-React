import { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);
    const nombreUsuario = "pepito";

    // agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity)=>{
        if(isInCart(item.id)){
            //el producto ya existe
            const newProducts = [...productosCarrito];
            //buscamos la posicion del producto dentro del arreglo.
            const productIndex = newProducts.findIndex(prod=>prod.item.id === item.id);
            //index del producto
            // newProducts[3]
            console.log(newProducts[productIndex]);
            newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;
            //cantidad actualizada del producto que se repite
            console.log('productos actualizado',newProducts);
            setProductosCarrito(newProducts);
        } else{
            //el producto no ha sido agregado
            const newProduct = {
                item,
                quantity
            }
            console.log('newProduct',newProduct)
            //agregamos el nuevo producto al carrito
            setProductosCarrito([...productosCarrito, newProduct]);
        }
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
        return productosCarrito.some(producto=>producto.item.id === id);
    }

    const getTotalCount = ()=>{
        const totalCount = productosCarrito.reduce((acc,item)=>acc+item.quantity,0)
        return totalCount;
    }

    const getTotalPrice = ()=>{
        const totalPrice = productosCarrito.reduce((acc,obj)=>acc+(obj.quantity*obj.item.price),0)
        return totalPrice;
    }

    return(
        <CartContext.Provider value={{productosCarrito, addItem, removeItem, clear, getTotalCount, getTotalPrice, nombreUsuario}}>
            {children}
        </CartContext.Provider>
    )
}