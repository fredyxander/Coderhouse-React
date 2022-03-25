import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Eventos } from './components/Temas/Eventos/Eventos';
import { Cart } from './components/Desafios/Cart/Cart';

import { ProductosContext } from './context/ProductosContext';
import { ContextContainer } from './components/Temas/Contexto/ContextContainer';

function App() {

  const objetoContexto = {
    color:"rojo",
    background: " yellow"
  }

  return (
    <ProductosContext.Provider value={objetoContexto}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
          <Route path="/contexto" element={<ContextContainer/>}/>
        </Routes>
      </BrowserRouter>
    </ProductosContext.Provider>
  );
}

export default App;
