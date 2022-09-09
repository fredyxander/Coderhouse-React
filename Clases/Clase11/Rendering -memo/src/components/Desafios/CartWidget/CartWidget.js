import Carrito from '../../../assets/carrito.png';
import {Link} from 'react-router-dom';

export const CartWidget = ()=>{
    return(
        <div>
            <Link to="/cart">
                <img src={Carrito} alt="mario" style={{width:20}}/>
            </Link>
            <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>2</span>
        </div>
    )
}