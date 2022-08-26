import React, {useEffect, useState} from "react";

export default function App() {
  const [categorias, setCategorias] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const peticion = await fetch("https://api.mercadolibre.com/sites/MLA/categories");
      console.log('peticion', peticion)
      const response = await peticion.json();
      console.log('response', response)
      setCategorias(response)
    }
    getData();
  },[])

  console.log('categorias', categorias)
  return (
    <div>
      {
        categorias.map((categoria)=>{
          return(
            <h4>{categoria.name}</h4>
          )
        })
      }
    </div>
  );
}
