import {useState, useEffect} from 'react';
import './App.css';
import { Carrito } from './components/Carrito/Carrito';
import { Contador } from './components/Contador/Contador';

function App() {
  const [estadoCarrito, setEstadoCarrito] = useState("Carrito vacio")
  const [numeroProductos, setNumeroProductos] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
      setEstadoCarrito("Esperando productos")
    }, 2000);
  },[numeroProductos])

  const agregar = (productos)=>{
    console.log('funcion agregar', productos)
    setNumeroProductos(productos);
    setEstadoCarrito(`el carrito tiene ${productos}`);
  }

  console.log('numeroProductos', numeroProductos);

  return (
    <div className="App">
      <header className="App-header">
        <p>{estadoCarrito}</p>
        <Contador stock={10} initial={0} agregarProducto={agregar}/>
        <Carrito numeroCarrito={numeroProductos}/>
      </header>
    </div>
  );
}

export default App;
