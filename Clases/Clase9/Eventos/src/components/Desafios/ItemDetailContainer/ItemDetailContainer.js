import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});

    const getItem = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(arregloProductos[0])
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem();
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}