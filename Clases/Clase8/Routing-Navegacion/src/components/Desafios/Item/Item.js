import './Item.css';

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <button className='boton-ver'>Ver detalle...</button>
        </div>
    )
}