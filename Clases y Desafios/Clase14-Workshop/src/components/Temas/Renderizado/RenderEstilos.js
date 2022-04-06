const estiloDark = {
    background: "red"
}

const estiloLight = {
    background: "yellow"
}

export const RenderEstilos = ({isColorProp})=>{
    const isColor = true;
    return(
        <div style={isColor ? estiloDark : estiloLight}>
            <p style={{color: isColorProp === true ? "black" : "white"}}>render estilos</p>
        </div>
    )
}