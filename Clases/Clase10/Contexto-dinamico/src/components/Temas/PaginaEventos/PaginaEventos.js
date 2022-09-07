import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './PaginaEventos.css';

export const PaginaEventos = () => {
    const [openModal, setOpenModal]= useState(false);

    const showModal = (event)=>{
        console.log('click')
        // console.log(event)
        // console.log('click', event.nativeElement)
        setOpenModal(!openModal)
    }

    // const hacerClick = (event)=>{
    //     // console.log('click', event)
    //     // console.log('click', event.nativeElement)
    //     setOpenModal(false)
    // }

    // useEffect(()=>{
    //     window.addEventListener("click",hacerClick);
    //     return ()=>{
    //         window.removeEventListener("click", hacerClick);
    //     }
    // },[])

    const enviarFormulario= (event)=>{
        event.preventDefault();
        console.log("formualrio enviado")
    }

    const handleChange = (event)=>{
        console.log('event', event)
        console.log(event.target.value)
    }

    const stopEvent= (e)=>{
        e.stopPropagation();
    }

    return (
        <div>
            <button onClick={showModal}>Abril modal</button>
            {
                openModal ?
                <div className='background-modal' onClick={showModal}>
                    <div className='modal' onClick={stopEvent}>
                        <p>soy un modal</p>
                        <button onClick={showModal}>cerrar</button>
                    </div>
                </div>
                :
                null
            }
            <hr/>
            <h2>prevent default</h2>
            <form onSubmit={enviarFormulario}>
                <input onChange={handleChange} placeholder='email'/>
                <button type='submit'>Enviar formulario</button>
            </form>
        </div>
    )
}
