import Carrito from '../../../assets/carrito.png';

export const CartWidget = ()=>{
    return(
        <div>
            <img src={Carrito} alt="mario" style={{width:50}}/>
            <span style={{backgroundColor: 'white', borderRadius:"50%", width:"50px", heigth:"50px", padding:10, color:"black"}}>2</span>
        </div>
    )
}