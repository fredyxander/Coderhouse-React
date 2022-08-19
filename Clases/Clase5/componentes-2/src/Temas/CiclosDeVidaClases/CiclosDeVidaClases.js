import {Component} from 'react';

export class CiclosDeVidaClases extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toString()
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({
                time:new Date().toString()
            })
        },1000)
    }

    componentWillUnmount(){
        if(this.state.time){
            clearInterval(this.interval)
        }
    }

    render(){
        return(
            <>
                <p>ciclos de vida en clases</p>
                <span>{this.state.time}</span>
            </>
        )
    }
}