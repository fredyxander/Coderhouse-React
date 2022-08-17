export const Alerta = (props)=>{
    console.log('props', props.children)
    return(
        <div style={{background:'pink', borderRadius:"5px", margin:'10px', padding:"10px"}}>
            <p>{props.mensaje}</p>
            {props.children}
        </div>
    )
}

// export default Alerta;