import {useState} from 'react';

export const Contador = ({stock, initial, agregarProducto})=>{
    //cuando una propiedad o una variable de estado cambie,
    //el componente vuelve a renderizarse
    const [contador, setContador] = useState(initial);

    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador + 1)
        }
    }

    const decrementar = ()=>{
        if(contador>0){
            setContador(contador-1)
        }
    }

    return(
        <div>
            <p>Numero de clics {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            {/* <button onClick={()=>(agregarProducto(contador))}
             style={{background: contador>1 ? 'blue' : 'white'}}>Agregar al carrito</button> */}
            <button onClick={()=>(agregarProducto(contador))}
             className={`btnDanger ${contador>1 ? 'activo' : 'inactivo'}`}
             disabled={true}>Agregar al carrito</button>
             {
                contador>1 ?
                <p>ya puede agregar productos</p>
                :
                <p>Incremente los productos!</p>
             }
        </div>
    )
}

//function1

//function2(function1){
//  function1()
// }