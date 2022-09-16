import React, { useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import {db} from "../../../utils/firebase";
import { useState } from 'react';

export const PaginaFirebase = () => {
    const [arregloProductos, setArregloProductos] = useState([]);

    // useEffect(()=>{
    //     const getData = async()=>{
    //         //consulta o referencia
    //         const query = collection(db,"items");
    //         const response = await getDocs(query);
    //         const docs = response.docs;
    //         // console.log("doc info", docs[0].data())
    //         // console.log("doc id", docs[0].id)
    //         const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
    //         setArregloProductos(data);
    //     }
    //     getData()
    // },[])

    useEffect(()=>{
        const getDocumento = async()=>{
            //consulta o referencia
            const query = doc(db,"items","QPecYuDxkskZBr3uoVjI");
            const response = await getDoc(query);
            const producto = {
                ...response.data(),
                id: response.id
            }
            console.log("productos", producto)
            // setArregloProductos(data);
        }
        getDocumento()
    },[])

  return (
    <div>PaginaFirebase</div>
  )
}
