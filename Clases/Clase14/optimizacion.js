// Inicio del código
import React, { useState } from 'react';

export default function App() {
  const [userForm, setUserForm] = useState({
    name: '',
    surname: '',
    age: '',
    address: ''
  });

  function inInputChange(evt){
    setUserForm({ ...userForm, [evt.target.name]: evt.target.value });    
  }

  function onSubmit() {
    console.log(
      `Your name is ${userForm.name} ${userForm.surname} and you have ${userForm.age} years`
    );
  }

  const arreglo = [
    {title:"Nombre", inputName:"name"},
    {title:"Apellido", inputName:"surname"},
    {title:"Edad", inputName:"age"},
    {title:"Direccion", inputName:"address"},
  ]

  return (
    <>
      {
        arreglo.map(elemento=>(
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>{elemento.title}</label>
            <input
              type="text"
              name={elemento.inputName}
              onChange={(evt) => inInputChange(evt)}
            />
          </div>
        ))
      }
      <button
        disabled={
          !(
            userForm.name &&
            userForm.surname &&
            userForm.age &&
            userForm.address
          )
        }
        onClick={(evt) => onSubmit(evt)}
      >
        Crear orden
      </button>
    </>
  );
}
