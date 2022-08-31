import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { PaginaContacto } from './components/Temas/PaginaContacto/PaginaContacto';
import { PaginaNosotros } from './components/Temas/PaginaNosotros/PaginaNosotros';
import { PaginaError } from './components/Temas/PaginaError/PaginaError';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <div>
            <Navbar/>

            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/productos" element={<ItemListContainer />}/>
              {/* <Route path="/productos/camisas" element={<ItemListContainer />}/>
              <Route path="/productos/zapatos" element={<ItemListContainer />}/> */}
              <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
              {/* /item/:id */}
              <Route path='/contacto' element={<PaginaContacto/>}/>
              <Route path='/nosotros' element={<PaginaNosotros/>}/>
              <Route path='*' element={<ItemListContainer />}/>
            </Routes>
            {/* <ItemListContainer />
            <ItemDetailContainer/> */}
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
