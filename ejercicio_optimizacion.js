// Inicio del código
import React, { useState } from 'react';

export default function App() {
  const [user, setUser] = useState({ name: '', surname: '', age: '', adress: '' });
  const campos = [
    {title:"Nombre", inputName:"name"},
    {title:"Apellido", inputName:"surname"},
    {title:"Edad", inputName:"age"},
    {title:"direccion", inputName:"adress"},
  ]

  function onChangeInput(evt){
    setUser({ ...user, [evt.target.name]: evt.target.value });
  }

  function onSubmit() {
    console.log(
      `Your name is ${user.name} ${user.surname} and you have ${user.age} years`
    );
  }

  return (
      <div>
          {
            campos.map(campo=>(
              <div style={{ display: 'flex', marginBottom: 8 }}>
                <label style={{ marginRight: 4 }}>{campo.title}</label>
                <input type="text" name={campo.inputName} onChange={(evt) => onChangeInput(evt)} />
              </div>
            ))
          }

          <button
            disabled={
              !(user.name && user.surname && user.age)
            }
            onClick={(evt) => onSubmit(evt)}
          >
            Crear orden
          </button>

      </div>
  );
}
