import { useContext } from "react";
import { ProductosContext } from "../../../Contexto/ProductosContext";
import { SubSubComponenteHijo } from "./SubSubComponenteHijo/SubSubComponenteHijo";


export const SubCompoenteHijo = ({producto, cambiarStock})=>{
    const valores = useContext(ProductosContext);
    console.log('valores', valores)

    const nuevoProducto = {
        title: "pantalon",
        stock:10
    }

    return(
        <div style={{height:500,width:"100%", background: "orange"}}>
            <p>subcomponente hijo</p>
            <SubSubComponenteHijo producto={producto} cambiarStock={cambiarStock}/>
            <button onClick={()=>valores.addProduct(nuevoProducto)}>Agregar producto</button>
            {
                valores.productos.map(producto=>(
                    <p>{producto.title}</p>
                ))
            }
        </div>
    )
}