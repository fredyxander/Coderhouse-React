import {useEffect, useState, useContext} from 'react';
import { ComponenteHijo } from "./ComponenteHijo/ComponenteHijo"
import { ProductosContext } from '../../Temas/Contexto/ProductosContext';
import { CustomProductosContext } from '../Contexto/CustomProductosContext';

export const Eventos = ()=>{
    const values = useContext(ProductosContext)
    // console.log('values en eventos', values)
    const [productoProp, setProductoProp] = useState({})
    const productoCamisa = {
        title: "camisa",
        description: "camisa talla s",
        color: "Roja",
        stock: 5
    }

    useEffect(()=>{
        setProductoProp(productoCamisa)
    },[])

    const cambiarStockPadre = (nuevoValor)=>{
        console.log('click', nuevoValor)
        const productoModificado = productoCamisa;
        productoModificado.stock = nuevoValor;
        setProductoProp(productoModificado);
    }

    return(
        <CustomProductosContext>
            <div style={{height:300,width:"100%", background: "red"}}>
                <p>Props y eventos</p>
                <ComponenteHijo producto={productoProp} cambiarStock={(value)=>cambiarStockPadre(value)}/>
            </div>
        </CustomProductosContext>
    )
}