import './Alerta.scss';
import Button from 'react-bootstrap/Button';

function Alerta(){
    return(
        <nav className='alerta-contenedor'>
            <p className='alerta-parrafo'>parrafo</p>
            <img src="" alt=""/>
            <h1 style={{color:'green'}}>titulo</h1>
            <Button variant="primary">Primary</Button>
        </nav>
    )
}

export default Alerta;