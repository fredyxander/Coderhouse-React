import { useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import {db} from '../../../utils/firebase';

export const FirebaseComponent = ()=>{
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        const getData = async()=>{
            // referencia en la base de datos de la informacion que quiero obtener.
            const query = collection(db, 'items');
            //obtener los documento dentro de la coleccion items.
            const response = await getDocs(query);
            //obtener informacion del documento y su id
            console.log('respuesta', response);
            console.log('info-documento',response.docs[0].data());
            console.log('id-documento', response.docs[0].id);
            //estructura de nuestros productos
            // const newDoc={
            //     id: doc.id,
            //     title: "kashd",
            //     price: 30,
            //     ...
            // }
            //almacenamos cada uno de los productos, con su id e informacion en nuevo arreglo
            const dataItems = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}});
            console.log('dataItems',dataItems)
            //agregamos los productos desde firestore a nuestra variables productos
            setProductos(dataItems);



            //itemDetailContainer
            //peticion para un unico documento
            //creamos nuestra referencia de ese documento
            const queryDoc = doc(db,'items', 'Ejko3L3DgvJ2bHXB4N51');
            //peticion para obtener el documento desde firestore
            const responseDoc = await getDoc(queryDoc);
            // obtenemos la informacion de nuestro documento en formato json.
            const dataDoc = responseDoc.data();
            console.log('info-documento-unico',dataDoc);
            //id unico del documento.
            console.log('id-documento-unico', responseDoc.id);
            //creamos un nuevo objeto con la informacion y el id
            const newDocumento = {id: responseDoc.id, ...dataDoc};
            console.log('newDocumento',newDocumento)
            //asignamos la informacion de nuestro documento a una variable en nuestro proyecto para pasarselo al componente ItemDetail.
            setProducto(newDocumento);
        }
        getData();
    },[])

    return(
        <div>
            <strong>Coleccion de productos</strong>
            {productos.map(producto=>(
                <div key={producto.id} style={{background:"orange", margin:"10px"}}>
                    <p>Title: {producto.title}</p>
                    <img style={{width:"100px"}} src={producto.pictureUrl} alt="imagen"/>
                </div>
            ))}

            -------------------
            <br/>
            <strong>Documento individual</strong>
            <div style={{margin:"10px"}}>
                <em>{JSON.stringify(producto)}</em>
            </div>
        </div>
    )
}