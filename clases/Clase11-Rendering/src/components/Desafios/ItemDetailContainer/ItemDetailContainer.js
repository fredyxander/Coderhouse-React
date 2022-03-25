import { useState, useEffect } from "react";
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const estiloContainer = {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#243746",
    height: "auto",
    padding: "10px",
}

export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});

    const getItem = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(arregloProductos)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const productos = await getItem();
            const producto = productos.find(elemento => elemento.url === id);
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[id])

    console.log('item:', item)
    return(
        <div style={estiloContainer}>
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}