import {useState} from 'react';
import { ComponenteHijo } from "../ComponenteHijo/ComponenteHijo"

export const ComponentePadre = ()=>{
    console.log("componente padre")
    const [dato, setDato] = useState(0)

    const cambiarDato= ()=>{
        setDato(dato+1)
    }

    return(
        <div style={{width:"100%",padding:"10px", height:"150px", background:"blue"}}>
            <p style={{color:"white"}}>componente padre</p>
            <p style={{color:"white"}}>{dato}</p>
            <button onClick={cambiarDato}>cambiar dato</button>
            <ComponenteHijo/>
        </div>
    )
}