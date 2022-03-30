import { ComponentePadre } from "./ComponentePadre/ComponentePadre"
import { RenderClases } from "./RenderClases"
import { RenderEstilos } from "./RenderEstilos"
import { Tecnica1 } from "./Tecnica1"
import { Tecnica2 } from "./Tecnica2"

export const Renderizado = ()=>{
    return(
        <div>
            <p>componente renderizado</p>
            {/* <ComponentePadre/> */}
            {/* <Tecnica1/> */}
            {/* <Tecnica2/> */}
            <RenderEstilos isColorProp={false}/>
            <RenderClases/>
        </div>
    )
}