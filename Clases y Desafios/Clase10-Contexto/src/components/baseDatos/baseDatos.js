import camisaCorta from '../../assets/productos/camisa-corta.jpg';
import camisaLarga from '../../assets/productos/camisa-larga.jpg';
import pantalonHombre from '../../assets/productos/pantalon-hombre.jpg';
import pantalonDama from '../../assets/productos/pantalon-mujer.jpg';
import pantalonNino from '../../assets/productos/pantalon-niño.jpg';
import zapatoHombre from '../../assets/productos/zapato-hombre.jpg';
import tennis from '../../assets/productos/tennis.jpg';
import botas from '../../assets/productos/botas.jpg';

import Pikachu from '../../assets/pokemons/pickachu.png';
import Charmander from '../../assets/pokemons/charmander.png';

export const arregloUsuarios =[
    {id: 1, name:'fredy'},
    {id: 2, name:'maria'},
    {id: 3, name:'vanesa'},
]

export const arregloProductos = [
    {id:1, title: "camisa pequeña", price: "30usd", pictureUrl: camisaCorta, description: "camisa de tela", url:"camisa-pequena", type:"camisas"},
    {id:2, title: "camisa larga", price: "40usd", pictureUrl: camisaLarga,description: "camisa de tela", url:"camisa-larga", type:"camisas"},
    {id:3, title: "pantalon caballero", price: "60usd", pictureUrl: pantalonHombre,description: "pantalon nacional", url:"pantalon-caballero", type:"pantalones"},
    {id:4, title: "pantalon dama", price: "65usd", pictureUrl: pantalonDama,description: "tela y drill", url:"pantalon-dama", type:"pantalones"},
    {id:5, title: "pantalon niño", price: "45usd", pictureUrl: pantalonNino, description: "panatlon de jean", url:"pantalon-nino", type:"pantalones"},
    {id:6, title: "zapatos hombre", price: "70usd", pictureUrl: zapatoHombre, description: "zapatos de gamousa", url:"zapatos-hombre", type:"zapatos"},
    {id:7, title: "tennis", price: "80usd", pictureUrl: tennis, description: "tennis deportivos", url:"tennis", type:"zapatos"},
    {id:8, title: "botas", price: "120usd", pictureUrl: botas, description: "botas de cuero", url:"botas", type:"zapatos"},
]

export const arreglopokemones = [
    {id:1, name:"pikachu", pictureUrl: Pikachu, type:"Electrico", url:"pikachu"},
    {id:2, name:"charmander", pictureUrl: Charmander, type:"Fuego", url:"charmander"},
]