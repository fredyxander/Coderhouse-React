import React, {useState, useEffect} from "react";

export const Rendering2 = () => {
      const [loading, setLoading] = useState(true);
      const [datos, setDatos] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            const getData = async()=>{
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                const personajes = data.results;
                setDatos(personajes);
                setLoading(false);
            }
            getData();
        },2000)
    },[])

    return (
        <div>
            {loading === true ?
                <p>cargando...</p>
            :
                <div>
                {
                    datos.map(elemento=>(
                    <p>{elemento.name}</p>
                    ))
                }
                </div>
            }
        </div>
    );
}
