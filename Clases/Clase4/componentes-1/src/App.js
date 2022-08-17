import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Hola from './components/Hola/Hola';
import {Alerta} from './components/Alerta/Alerta';
import mario from './assets/mario.png';

function App() {
  return (
    <div className="App">
      <img src={mario}/>
      {/* <header className="App-header">
        <Welcome titulo="Curso de React" comision="41590" color="red"></Welcome>
        <Welcome titulo="Curso de Javascript" comision="10200" color="blue"></Welcome>
        <Hola curso="Html"></Hola>
        <Alerta mensaje="Hubo un error">
          <button>Aceptar</button>
        </Alerta>
        <Alerta mensaje="Aceptar los terminos">
          <button>Cancelar</button>
          <button>Confirmar</button>
        </Alerta>
        <Alerta mensaje="Aceptar los terminos">
        </Alerta>
      </header> */}
    </div>
  );
}

export default App;
