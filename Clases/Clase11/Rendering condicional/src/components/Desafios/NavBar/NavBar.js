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
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/camisas">camisas</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/zapatos">Zapatos</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/rendering1">Rendering1</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/rendering2">Rendering2</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/rendering3">Rendering3</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
