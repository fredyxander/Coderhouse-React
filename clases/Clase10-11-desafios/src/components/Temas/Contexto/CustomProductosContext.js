import { useState } from "react";
import { ProductosContext } from "../../Temas/Contexto/ProductosContext";

export const CustomProductosContext = ({children})=>{
    const [productos, setProductos] = useState([]);

    const addProduct = (newProduct)=>{
        setProductos([...productos, newProduct]);
    }

    return(
        <ProductosContext.Provider value={{productos, addProduct}}>
            {children}
        </ProductosContext.Provider>
    )
}