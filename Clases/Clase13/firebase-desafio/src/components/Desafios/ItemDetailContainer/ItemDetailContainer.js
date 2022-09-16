import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    // const getItem = (id)=>{
    //     return new Promise((resolve, reject)=>{
    //         const product = arregloProductos.find(item=>item.id === parseInt(id));
    //         resolve(product)
    //     })
    // }

    useEffect(()=>{
        const queryRef = doc(db,"items",productId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            console.log(newDoc)
            setItem(newDoc);
        }).catch(error=>console.log(error));
        // const getProducto = async()=>{
        //     const producto = await getItem(productId);
        //     setItem(producto);
        // }
        // getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}