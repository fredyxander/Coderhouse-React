import React from 'react'
import { useState } from 'react';
import { ComponenteHijo } from './ComponenteHijo'

export const ComponentePadre = () => {
    const [value, setValue] = useState(0);
    const obtenerValor = (contador)=>{
        console.log('click en componente hijo', contador)
        setValue(contador)
    }
    return (
        <div style={{border:"1px solid black", margin:"10px"}}>
            ComponentePadre
            <ComponenteHijo obtenerValor={obtenerValor} value={value}/>
        </div>
    )
}
