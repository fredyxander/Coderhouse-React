import React from 'react'
import { useState } from 'react'
import { ComponenteSubHijoA } from './ComponenteSubHijoA'
import { ComponenteSubhijoB } from './ComponenteSubhijoB'

export const ComponenteHijo = ({obtenerValor, value}) => {
    // const [value, setValue] = useState(0);
    // const obtenerValor = (contador)=>{
    //     console.log('click en componente hijo', contador)
    //     setValue(contador)
    // }

    return (
        <div style={{border:"1px solid red", margin:"10px"}}>
            ComponenteHijo
            <ComponenteSubHijoA obtenerValor={obtenerValor}/>
            <ComponenteSubhijoB value={value}/>
        </div>
    )
}
