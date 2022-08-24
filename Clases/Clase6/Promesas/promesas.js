const listarEstudiantes = (tipoDeUsuario) => {
    const estudiantes = ["pedro", "paula", "mario"];
    return new Promise((resolve, reject)=>{
        if(tipoDeUsuario === "profesor"){
            resolve(estudiantes)
        } else if(tipoDeUsuario === "coordinador"){
            resolve(estudiantes)
        }
         else{
            reject("No tiene permisos")
        }
    })
}

const pasoElCurso = (nombre)=>{
    return new Promise((resolve, reject)=>{
        if(nombre === "paula"){
            resolve("Paula paso el curso")
        }
         else{
            reject("No paso el curso")
        }
    })
}

// console.log(listarEstudiantes("profesor"));

// listarEstudiantes("profesor")
// .then((resultadoPromesa)=>
//     console.log("se cumplio de manera exitosa", resultadoPromesa)
//     // resultadoPromesa;
// )
// .catch((error)=>console.log("hubo un error en el servidor: ", error))
// .then((listado)=>{
//     pasoElCurso(listado[0])
//     .then((resultado2)=>console.log(resultado2))
//     .catch(error=>console.log(error))
// })

//async-await
const funcionAsincrona = async()=>{
    try {
        const listado = await listarEstudiantes("profesor");
        listado.push("Maria");
        console.log("listado", listado);
        const resultadoCurso = await pasoElCurso(listado[1]);
        const nuevoArreglo = [1,2,3];
        console.log('resultado', resultadoCurso)
        console.log("el proceso ya finalizo")
    } catch (error) {
        console.log("error", error)
    }
}

funcionAsincrona();