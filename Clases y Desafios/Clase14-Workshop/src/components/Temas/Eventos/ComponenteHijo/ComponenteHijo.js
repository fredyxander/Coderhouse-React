import { SubCompoenteHijo } from "./SubCompoenteHijo/SubCompoenteHijo"

export const ComponenteHijo = ({producto, cambiarStock})=>{
    return(
        <div style={{height:200,width:"100%", background: "blue"}}>
            <p>componente hijo</p>
            <SubCompoenteHijo producto={producto} cambiarStock={cambiarStock}/>
        </div>
    )
}