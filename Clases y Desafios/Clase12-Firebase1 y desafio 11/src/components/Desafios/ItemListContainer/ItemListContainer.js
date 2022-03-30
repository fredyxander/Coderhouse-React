/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { arregloProductos } from "../../../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const estilosItemListContainer = {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent:"flex-start",
    alignItems: "center",
    background: "#e4e6ed",
    padding: "10px 0"
}

export const ItemListContainer = ()=>{
    const {id} = useParams();
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        console.log('id-categoria', id)
        promesa.then(resultados=>{
            if(id){ // paginas de las categorias
                const productosCategoria = resultados.filter(elemento => elemento.category === id);
                console.log('productosCategoria:', productosCategoria)
                setProductos(productosCategoria);
            } else{ // paginas principal
                setProductos(resultados)
            }
        })
    },[id])

    console.log('productos pagina', productos)
    return(
        <div style={estilosItemListContainer}>
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}