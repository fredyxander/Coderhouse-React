import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartContainer } from './components/Desafios/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import { Rendering1 } from './components/Temas/Rendering1/Rendering1';
import { Rendering2 } from './components/Temas/Rendering2/Rendering2';
import { Rendering3 } from './components/Temas/Rendering3/Rendering3';


function App() {

  return (
    <CartProvider>
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
                  <Route path="/rendering1" element={<Rendering1/>}/>
                  <Route path="/rendering2" element={<Rendering2/>}/>
                  <Route path="/rendering3" element={<Rendering3/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
