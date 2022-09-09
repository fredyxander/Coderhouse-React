import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elmIndex = productCartList.findIndex(product =>product.id === id);
        if(elmIndex>=0){
            return {exists: true, index:elmIndex}
        } else{
            return {exists: false, index:undefined}
        }
    }

    const addProduct = (product)=>{
        const inCartObj = isInCart(product.id);
        if(inCartObj.exists){
            const productListCopy = [...productCartList];
            productListCopy[inCartObj.index].quantity = productListCopy[inCartObj.index].quantity + product.quantity;
            setProductCartList(productListCopy)
        } else{
            const newList = [...productCartList,product];
            setProductCartList(newList)
        }
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