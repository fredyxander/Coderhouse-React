import './Imagen.css';

export const Imagen = ({imagen, poder,texto, arreglo})=>{
    return(
        <div className='container'>
            <img src={imagen} alt='' className='imagen-size'/>
            <p>Poder: {poder}</p>
            <p>{texto}</p>
            <button>Me gusta!</button>
        </div>
    )
}