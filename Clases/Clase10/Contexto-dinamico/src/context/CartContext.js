import { createContext, useState } from "react";
import { arregloProductos } from "../components/baseDatos/baseDatos";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    // const productCartList = arregloProductos;
    const [productCartList, setProductCartList] = useState([]);

    
    const addProduct = (product)=>{
        const newList = [...productCartList,product];
        setProductCartList(newList)
    }

    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct}}>
            {/* ..components */}
            {children}
        </CartContext.Provider>
    )
}