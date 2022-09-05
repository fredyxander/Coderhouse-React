import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import mario from '../../../assets/mario.png';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={mario} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/camisas">camisas</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/zapatos">Zapatos</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/contacto">Contacto</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/nosotros">Nosotros</NavLink>
                 <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/eventos">eventos</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/eventos-react">eventos react</NavLink>
                {/* <a href="/camisas">Camisas</a>
                <a href="/pantalones">Pantalones</a>
                <a href="/zapatos">Zapatos</a> */}
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
