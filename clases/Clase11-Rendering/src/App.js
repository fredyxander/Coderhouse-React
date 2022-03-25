import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Eventos } from './components/Temas/Eventos/Eventos';
import { Cart } from './components/Desafios/Cart/Cart';

import { ContextContainer } from './components/Temas/Contexto/ContextContainer';
import { Renderizado } from './components/Temas/Renderizado/Renderizado';
import {CustomCartContext} from './context/CustomCartContext';

function App() {

  return (
    <CustomCartContext>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
          <Route path="/contexto" element={<ContextContainer/>}/>
          <Route path="/renderizado" element={<Renderizado/>}/>
        </Routes>
        <footer>
          Derechos reservados a company tal
        </footer>
      </BrowserRouter>
    </CustomCartContext>
  );
}

export default App;
