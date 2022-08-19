import {useState} from 'react';

export const EstadoFunciones = ()=>{
    const [apellido, setApellido] = useState("perez");

    const cambiarApellido = ()=>{
        console.log('funcion llamada');
        setApellido("Mejias")
    }

    return(
        <div>
            <p>estado en funciones</p>
            <p>{apellido}</p>
            <button onClick={cambiarApellido}>cambiar estado</button>
        </div>
    )
}