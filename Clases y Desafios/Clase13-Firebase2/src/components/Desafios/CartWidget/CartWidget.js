import { useContext } from 'react';
import Carrito from '../../../assets/carrito.png';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = ()=>{
    console.log('cart widget')
    const carritoContext = useContext(CartContext);

    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={Carrito} alt="mario" style={{width:50}}/>
            {
                (carritoContext.getTotalCount())>0 &&
                <span style={{backgroundColor: 'white', borderRadius:"50%", width:"auto", heigth:"50px", padding:10, color:"black", margin:"5px"}}>
                    {carritoContext.getTotalCount()}
                </span>
            }
        </div>
    )
}