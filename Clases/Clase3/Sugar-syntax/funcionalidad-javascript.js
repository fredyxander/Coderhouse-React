//spread operator
let arreglo1 = [1,2,3];
let arreglo2 = [4,5,6];
// const arregloFinal = arreglo1.concat(arreglo2);
const arregloFinal = [...arreglo1, ...arreglo2];
// console.log('arreglo final ', arregloFinal);

let arreglo3 = arreglo1;
// arreglo3.push(7);
// console.log('arreglo3',arreglo3);
// console.log('arreglo1',arreglo1);

let arreglo4 = [...arreglo1];
arreglo4.push(10);
// console.log('arreglo4',arreglo4);
// console.log('arreglo1',arreglo1);

const numeros = [5,4,2,34,5,3];
// function sumar(numero1,numero2){
//     console.log(numero1 + numero2)
// }
// sumar(numeros[0], numeros[1]);

//destructuracion
// const numero1 = numeros[0];
// const numero2 = numeros[1];
// const [numero1, numero2, ...rest] = numeros;
// console.log(rest)
const user = {
    nombre:'pepe',
    apellido:'castro',
    edad:23
}

// const nombreUser = user.nombre;
const {nombre,apellido,edad} = user;
// console.log(nombre)
// console.log(apellido)
// console.log(edad)

function ObtenerValores({edad}){
    console.log('edad: ', edad)
}

ObtenerValores(user);