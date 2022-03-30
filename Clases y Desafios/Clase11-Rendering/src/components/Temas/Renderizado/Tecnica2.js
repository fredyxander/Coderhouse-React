export const Tecnica2 = ()=>{
    const nuevosDatos = []

    if(nuevosDatos.length>0){
        console.log("hay datos")
    }

    return(
        <div>
            <p>tecnica 2</p>
            {
                nuevosDatos.length > 0 && nuevosDatos.map(dato=>(
                    <p key={dato.id}>{dato.title}</p>
                ))
            }
        </div>
    )
}