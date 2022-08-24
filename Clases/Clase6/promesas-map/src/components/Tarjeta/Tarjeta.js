import React, { useState } from 'react'

export const Tarjeta = ({pokemon}) => {
    const [likes, setLikes] = useState(0);

    const incrementar = ()=>{
        setLikes(likes + 1);
    }

    return (
        <div className='card'>
            <img src={pokemon.imagen} alt="" className='cardImg'/>
            <p>{pokemon.nombre}</p>
            <p>No likes: {likes}</p>
            <button onClick={incrementar}>+</button>
        </div>
    )
}
