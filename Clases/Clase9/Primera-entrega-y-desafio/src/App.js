import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { CartContainer } from './components/Desafios/CartContainer/CartContainer';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <div>
            <Navbar/>

            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
              <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartContainer/>}/>
              <Route path='*' element={<ItemListContainer />}/>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
