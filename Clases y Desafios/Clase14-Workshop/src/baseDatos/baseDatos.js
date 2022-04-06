// import camisaCorta from '../../assets/productos/camisa-corta.jpg';
// import camisaLarga from '../../assets/productos/camisa-larga.jpg';
// import pantalonHombre from '../../assets/productos/pantalon-hombre.jpg';
// import pantalonDama from '../../assets/productos/pantalon-mujer.jpg';
// import pantalonNino from '../../assets/productos/pantalon-niño.jpg';
// import zapatoHombre from '../../assets/productos/zapato-hombre.jpg';
// import tennis from '../../assets/productos/tennis.jpg';
// import botas from '../../assets/productos/botas.jpg';

import Pikachu from '../assets/pokemons/pickachu.png';
import Charmander from '../assets/pokemons/charmander.png';

export const arregloUsuarios =[
    {id: 1, name:'fredy'},
    {id: 2, name:'maria'},
    {id: 3, name:'vanesa'},
]

export const arregloProductos = [
    {
        id:1,
        title: "camisa pequeña",
        price: 30,
        pictureUrl: "https://thumbs.dreamstime.com/b/peque%C3%B1a-camisa-con-la-bandera-de-canad%C3%A1-33482156.jpg",
        description: "camisa de tela",
        category:"camisas",
        stock:5
    },
    {
        id:2,
        title: "camisa larga",
        price: 40,
        pictureUrl: "https://cdn.shopify.com/s/files/1/2683/6694/products/product-image-531432496_480x480.jpg?v=1571708716",
        description: "camisa de tela",
        category:"camisas",
        stock:10
    },
    {
        id:3,
        title: "pantalon caballero",
        price: 60,
        pictureUrl: "https://treselefantes.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/06/18182518/Pantalon-Dril-Mostaza-Hombre-139250121130041.jpg",
        description: "pantalon nacional",
        category:"pantalones",
        stock:8
    },
    {
        id:4,
        title: "pantalon dama",
        price: 65,
        pictureUrl: "https://pieers.com/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/p/s/psx07jy04sb_1.jpg",
        description: "tela y drill",
        category:"pantalones",
        stock:15
    },
    {
        id:5,
        title: "pantalon niño",
        price: 45,
        pictureUrl: "https://image.made-in-china.com/155f0j00DujYscNzHroG/Baby-Product-Clothing-Sport-Trousers-Toddler-Children-Wear-Pants.jpg",
        description: "panatlon de jean",
        category:"pantalones",
        stock:5
    },
    {
        id:6,
        title: "zapatos hombre",
        price: 70,
        pictureUrl: "https://static.dafiti.com.co/p/tellenzi-2594-5580381-1-catalog-new.jpg",
        description: "zapatos de gamousa",
        category:"zapatos",
        stock:4
    },
    {
        id:7,
        title: "tennis",
        price: 80,
        pictureUrl: "https://i.pinimg.com/originals/06/7a/00/067a003353112cfa87c06c3fd1d8b366.jpg",
        description: "tennis deportivos",
        category:"zapatos",
        stock:10
    },
    {
        id:8,
        title: "botas",
        price: 120,
        pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Boots_3_by_wax115.jpg",
        description: "botas de cuero",
        category:"zapatos",
        stock:2
    },
]

export const arreglopokemones = [
    {id:1, name:"pikachu", pictureUrl: Pikachu, type:"Electrico", url:"pikachu"},
    {id:2, name:"charmander", pictureUrl: Charmander, type:"Fuego", url:"charmander"},
]