import {Component} from 'react';

class Hola extends Component{
    render(){
        return(
            <h2>Hola curso de {this.props.curso}</h2>
        )
    }
}

export default Hola