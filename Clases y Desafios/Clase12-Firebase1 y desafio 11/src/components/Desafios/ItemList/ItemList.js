import { Item } from "../Item/Item"
import './ItemList.css';

export const ItemList = ({items, cursoProp})=>{

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto} cursoProp2={cursoProp}/>
                ))
            }
        </div>
    )
}