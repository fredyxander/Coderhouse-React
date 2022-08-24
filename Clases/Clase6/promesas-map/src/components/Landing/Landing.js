import React, { useEffect, useState } from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import imagenPikachu from '../../assets/pikachu.png';
import imagenCharizard from '../../assets/Charizard.webp';

//respuesta de un servidor
const arregloPokemones = [
    {
        nombre: 'pikachu',
        poder:200,
        habilidades:["rayo", "golpe"],
        imagen: imagenPikachu
    },
    {
        nombre: 'Charizard',
        poder:2000,
        habilidades:["volar", "llama"],
        imagen: imagenCharizard
    },
    {
        nombre: 'pikachu',
        poder:200,
        habilidades:["rayo", "golpe"],
        imagen: imagenPikachu
    },
    {
        nombre: 'Charizard',
        poder:2000,
        habilidades:["volar", "llama"],
        imagen: imagenCharizard
    },
    {
        nombre: 'pikachu',
        poder:200,
        habilidades:["rayo", "golpe"],
        imagen: imagenPikachu
    },
    {
        nombre: 'Charizard',
        poder:2000,
        habilidades:["volar", "llama"],
        imagen: imagenCharizard
    },
    {
        nombre: 'pikachu',
        poder:200,
        habilidades:["rayo", "golpe"],
        imagen: imagenPikachu
    },
    {
        nombre: 'Charizard',
        poder:2000,
        habilidades:["volar", "llama"],
        imagen: imagenCharizard
    },
    {
        nombre: 'pikachu',
        poder:200,
        habilidades:["rayo", "golpe"],
        imagen: imagenPikachu
    },
    {
        nombre: 'Charizard',
        poder:2000,
        habilidades:["volar", "llama"],
        imagen: imagenCharizard
    },
]

export const Landing = () => {
    const [pokemones, setPokemones] = useState([]);

    const obtenerPokemones = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(arregloPokemones)
            }, 3000);
        })
    }

    useEffect(()=>{
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerPokemones();
                setPokemones(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])

    return (
        <div className='listContainer'>
            <Mensaje/>
            <div className='cardsContainer'>
                {/* {
                    pokemones.length>0 &&
                    <>
                        <Tarjeta pokemon={pokemones[0]}/>
                        <Tarjeta pokemon={pokemones[1]}/>
                    </>
                } */}
                {
                    pokemones.map((pokemon)=>{
                        return(
                            <Tarjeta pokemon={pokemon}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
