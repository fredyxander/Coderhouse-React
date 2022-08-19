import React, {Component} from 'react';

export class EstadoClase extends Component{
    constructor(props){
        super(props)
        this.state = {
            apellido: "Castillo"
        }
    }

    cambiarEstado = ()=>{
        this.setState({
            apellido: "Parra"
        })
    }

    render(){
        return(
            <>
                <p>componente clase, hola {this.props.name} <span style={{color:"red"}}>{this.state.apellido}</span></p>
                <button onClick={this.cambiarEstado}>cambiar estado</button>
            </>
        )
    }
}