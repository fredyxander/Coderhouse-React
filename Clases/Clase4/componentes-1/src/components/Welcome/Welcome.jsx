function Welcome({titulo, comision, color}){
    // const props = {
    //     titulo="Curso de React",
    //     comision="41590",
    //     color="red",
    // }
    // console.log(props)
    // const titulo = props.titulo;
    // const {titulo, comision} = props;
    return(
        <div style={{background:color, margin:'10px'}}>
            <p>{titulo} {comision}</p>
        </div>
    )
}

export default Welcome;

// function crearNombre(nombre){
//     return `soy ${nombre}`
// }
// crearNombre('Andres')
// crearNombre('Laura')