import { useContext } from "react";
import { SubSubComponenteHijo } from "./SubSubComponenteHijo/SubSubComponenteHijo";
import { ProductosContext } from "../../../../../context/ProductosContext";

export const SubCompoenteHijo = ({producto, cambiarStock})=>{
    const valores = useContext(ProductosContext);
    console.log('valores', valores)

    const nuevoProducto = {
        title: "pantalon",
        stock:10
    }

    return(
        <div style={{height:"auto",width:"100%", background: "orange"}}>
            <p>subcomponente hijo</p>
            <SubSubComponenteHijo producto={producto} cambiarStock={cambiarStock}/>
            <hr/>
            <button onClick={()=>valores.addProduct(nuevoProducto)}>Agregar producto</button>
            {
                valores.productos.map((producto, i)=>(
                    <p key={i}>{producto.title}</p>
                ))
            }
            <hr/>
        </div>
    )
}