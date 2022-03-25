import { useContext } from "react";
import { ProductosContext } from "../../../../../../context/ProductosContext";

export const SubSubComponenteHijo = ({producto, cambiarStock})=>{
    const values = useContext(ProductosContext)
    // console.log('values en sub subcompoente hijo', values)
    return(
        <div style={{height:"auto",width:"100%", background: values.background}}>
            <p>sub subcomponente hijo</p>
            <p>{producto.title}</p>
            <p>stock: {producto.stock}</p>
            <button onClick={()=>cambiarStock(3)}>Cambiar stock</button>
        </div>
    )
}