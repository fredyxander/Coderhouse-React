import { useEffect, useState } from "react";
import spinner from '../../../assets/spinning-loading.gif';
export const Tecnica1 = ()=>{
    const loading = false;
    const [datos, setDatos] = useState([]);

    useEffect(()=>{
        const nuevosDatos = [
            {
                title:"camisa",
                price: 500
            },
            {
                title:"pantalon",
                price: 600
            }
        ]
        setTimeout(() => {
            setDatos(nuevosDatos);
        }, 3000);
    },[])

    if(loading === true){
        return <p>loading es igual a true</p>
    }

    return(
        <div>
            <p>loading es igual a false</p>
            {datos.length > 0 ?
                datos.map(dato=>(
                    <div>
                        <p>{dato.title}</p>
                        <p>$ {dato.price}</p>
                    </div>
                ))
            :
                <img src={spinner} alt="imagen loading"/>
            }
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}