/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export const ItemListContainer = ()=>{
    const {categoria} = useParams();

    const [productos, setProductos] = useState([]);

    // const promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(arregloProductos);
    //     }, 2000);
    // })

    useEffect(()=>{
        const getData = async()=>{
            try {
                let queryRef = !categoria ? collection(db,"items") :query(collection(db,"items"),where("categoria","==",categoria));
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setProductos(datos)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
        // promesa.then(resultado=>{
        //     if(!categoria){
        //         setProductos(resultado)
        //     } else{
        //         const nuevaLista = resultado.filter(item=>item.categoria === categoria);
        //         setProductos(nuevaLista)
        //     }
        // })
    },[categoria])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}