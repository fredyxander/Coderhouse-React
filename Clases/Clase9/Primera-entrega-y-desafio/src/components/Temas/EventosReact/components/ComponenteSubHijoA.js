import React, { useState } from 'react'

export const ComponenteSubHijoA = ({obtenerValor}) => {
    const [contador, setContador]=useState(0);

    const sumar = ()=>{
        setContador(contador+1)
        // obtenerValor(contador+1)
    }

    // const funcionInterna = ()=>{
    //     obtenerValor(contador)
    // }

    return (
        <div style={{border:"1px solid orange", margin:"10px"}}>
            ComponenteSubHijoA, contador: {contador}
            <button onClick={sumar}>+</button>
            <button onClick={()=>obtenerValor(contador)}>pasar valor</button>
        </div>
    )
}
