import { async } from '@firebase/util';
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore';
import {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../utils/firebase';
import { CartItem } from '../CartItem/CartItem';
import './Cart.css';

export const Cart = ()=>{
    const carritoContext = useContext(CartContext);
    // console.log('carritoContext',carritoContext);
    const productosCarrito = carritoContext.productosCarrito;
    // console.log('productos Carrito', productosCarrito);

    const sendOrder = async(e)=>{
        e.preventDefault();
        // console.log('evento-formulario', e)
        const nombre = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;
        //crear el nuevo objeto con informacion del comprador y los productos.
        const newOrder = {
            buyer:{
                name: nombre,
                phone,
                email
            },
            items: productosCarrito,
            total: carritoContext.getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        console.log('newOrder',newOrder)

        //crear la referencia de la coleccion donde guardo el documento de la orden.
        const ordersCollection = collection(db, 'orders');
        // crear el nuevo documento de la orden.
        const docReference = await addDoc(ordersCollection, newOrder);
        console.log('referencia documento creado', docReference)
    }

    const updateProduct = async()=>{
        //referencia del documento que quiero modificar
        const docReference = doc(db,'items','gsz9oc72rC1RlGi3CNGQ');
        //obtener la respuesta de la peticion a firebase
        const docResponse = await getDoc(docReference);
        //obtener informacion del documento
        const docData = docResponse.data();
        console.log('informacion documento json', docData);
        //como modificar valores de un objeto
        // const objetoEjemplo = {nombre:"fredy", apellido:"chaparro"};
        // console.log('objetoEjemplo',objetoEjemplo)
        // const nuevoObjeto = {...objetoEjemplo, apellido:"castro"};
        // console.log('nuevoObjeto',nuevoObjeto);

        //actualiza documento
        await updateDoc(docReference,{...docData, stock: 20});
    }

    const updateOrder = async()=>{
        //referencia del documento
        const orderReference = doc(db,'orders','CLu0knGs11NtJ7609kRo');
        const docResponse = await getDoc(orderReference);
        //info orden formato json
        const orderInfo = docResponse.data();
        console.log('info orden', orderInfo);
        //actualizar la orden
        await updateDoc(orderReference,{...orderInfo, buyer:{...orderInfo.buyer, name:"andres"}})
    }

    return(
        <div>
            <p>cart container {carritoContext.nombreUsuario}</p>
            {
                productosCarrito.length>0 ?
                <>
                    {
                        productosCarrito.map(producto=>(
                            <CartItem key={producto.item.id} productoProp={producto}/>
                        ))
                    }
                    <div className='empty-cart'>
                        <p>Total: {carritoContext.getTotalPrice()}</p>
                        <button onClick={carritoContext.clear}>Vaciar carrito</button>
                    </div>
                    <div>
                        <form onSubmit={sendOrder}>
                            <input type="text" placeholder='nombre' />
                            <input type="text" placeholder='phone' />
                            <input type="email" placeholder='email' />
                            <button type='submit'>Enviar orden</button>
                        </form>
                    </div>
                    <br/><br/><br/><br/>
                    <button onClick={updateProduct}>Actualizar producto</button>
                    <button onClick={updateOrder}>Actualizar orden</button>
                </>
                :
                <div>
                    <p>No hay productos</p>
                </div>
            }
        </div>
    )
}