import { useEffect, useState } from "react";

const funcionExterna = ()=>{
    console.log('1. renderizado')
}

export const CiclosEnFunciones = ()=>{
    const [texto, setTexto] = useState("texto inicial");

    useEffect(()=>{
        //llamados a apis externas.
        console.log('2. useEffect ejecutado')
        return ()=>{
            //cancelar procesos asincronos.
            //hacer limpieza de variables.
        }
    },[])

    const cambiarTexto = ()=>{
        setTexto("texto modificado")
    }

    useEffect(()=>{
        //llamados a apis externas.
        console.log('3. useEffect ejecutado con dependencias')
        return ()=>{
            //cancelar procesos asincronos.
            //hacer limpieza de variables.
        }
    },[texto])

    return(
        <div>
            <p>ciclos de vida en funciones {texto}</p>
            {funcionExterna()}
            <button onClick={cambiarTexto}>cambiar texto</button>
        </div>
    )
}