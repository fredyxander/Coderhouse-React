import React, { useState } from 'react';

const ComponenteTexto = ({ texto }) => {
  console.log('ComponenteTexto redenrizado');
  return <p>{texto}</p>;
};

const ComponenteLista = React.memo(({ lista }) => {
  console.log('ComponenteLista renderizado');
  return (
    <div>
      {lista.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
});

const ComponenteFijo = React.memo(()=>{
    console.log("ComponenteFijo renderizado")
    return(
        <p>texto fijo</p>
    )
})

const productos = [
  { id: 1, name: 'producto1' },
  { id: 2, name: 'producto2' },
];

export const Memo = () => {
    const [texto, setTexto] = useState('texto inicial');

    return (
      <div>
        <ComponenteTexto texto={texto} />
        <ComponenteLista lista={productos} />
        <ComponenteFijo/>
        <button onClick={()=>setTexto("curso react")}>cambiar texto</button>
      </div>
    );
}
