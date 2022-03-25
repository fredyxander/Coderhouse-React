import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import mario from '../../../assets/mario.png';
import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <div>
                <Link to="/">
                    <img src={mario} alt="logo" style={{width:"50px"}}/>
                </Link>
            </div>
            <div className='navegacion'>
                <Link to="/">Inicio</Link>
                <Link to="/category/camisas">Camisas</Link>
                <Link to="/category/pantalones">Pantalones</Link>
                <Link to="/category/zapatos">Zapatos</Link>
                <Link to="/eventos">eventos</Link>
                <Link to="/contexto">contexto</Link>
                <Link to="/renderizado">renderizado</Link>
            </div>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </nav>
    )
}
