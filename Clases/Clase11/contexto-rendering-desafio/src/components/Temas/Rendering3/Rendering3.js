import React, {useState} from 'react';
import './Rendering3.css';

const Componente = ({condition, tipoMensaje})=>{
    return(
        <div>
            <p style={{color:condition ? 'red' : 'white', background:'blue'}} >texto</p>
            <p className={`${tipoMensaje === "alerta" ? "clase1" : "clase2"} ${condition ? "color1": "color2"} otraClase clasesss`}>clases</p>
        </div>
    )
}

export const Rendering3 = () => {
    const [condition,setCondition] = useState(false);

    return (
        <div>
            <Componente condition={condition} tipoMensaje="exito"/>
            <button onClick={()=>setCondition(!condition)}>cambiar colores </button>
            {condition && <p>soy una etiqueta mas</p>}
        </div>
    );
}
