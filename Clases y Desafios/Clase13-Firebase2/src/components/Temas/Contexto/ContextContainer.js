import { useContext } from "react";
import { ProductosContext } from "../../Temas/Contexto/ProductosContext";
import { Eventos } from "../Eventos/Eventos";
import { CustomProductosContext } from "./CustomProductosContext";

export const ContextContainer = ()=>{
    const valores = useContext(ProductosContext);
    console.log('valores', valores);

    return(
        <div>
            Context container
            <CustomProductosContext>
                <Eventos/>
            </CustomProductosContext>
        </div>
    )
}