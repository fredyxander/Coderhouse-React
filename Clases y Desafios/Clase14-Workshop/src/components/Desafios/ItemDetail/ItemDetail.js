import { useState, useContext } from 'react';
import './ItemDetail.css';
import {ItemCount} from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import { CartContext } from '../../../context/CartContext';

export const ItemDetail = ({item})=>{
    const carritoContext = useContext(CartContext);
    console.log('carritoContext-itemDetail', carritoContext);

    const [productosAgregados, setProductosAgregados] = useState(0);
    const [stockProducto, setStockProducto] = useState(5);

    const onAddFunction = (quantityToAdd)=>{
        setProductosAgregados(quantityToAdd)
        setStockProducto(stockProducto - quantityToAdd);
        carritoContext.addItem(item, quantityToAdd);
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
                <p>Descripción: {item.description}</p>
                <ItemCount stock={stockProducto} initial={1} onAdd={onAddFunction} />
                {
                    productosAgregados>0 &&
                    <Link to="/cart" className='a-end-button'>
                        <button className='end-button'>Terminar mi compra</button>
                    </Link>
                }
                <Link to="/" className='a-end-button'>
                    <button className='end-button'>Regresar al listado</button>
                </Link>
            </div>
        </div>
    )
}