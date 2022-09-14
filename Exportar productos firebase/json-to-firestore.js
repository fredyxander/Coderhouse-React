const {initializeApp} = require("firebase/app");
const {getFirestore, collection, addDoc} = require("firebase/firestore");
const baseDeDatos = require("./baseDeDatos");

console.log('file working');

// Initialize Cloud Firestore through Firebase
//REMPLAZAR CON LAS CONFIGURACIONES DE SUS CUENTAS DE FIREBASE
const firebaseConfig = {
    apiKey: "<YOUR API KEY>",
    authDomain: "<YOUR AUTH DOMAIN>",
    projectId: "<YOUR PROJECT ID",
    storageBucket: "<YOUR STORAGE BUCKET>",
    messagingSenderId: "<YOUR MSG SENDER ID>",
    appId: "<YOUR APP ID>",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const queryColecction = collection(db,'items');

const callback = () =>{
    console.log('proceso completado exitosamente');
    process.exit();
}
let itemsProcessed = 0;

baseDeDatos.forEach((obj, index, array) => {
    //REMPLAZAR CON LOS NOMBRES DE SUS CAMPOS COMO ESTAN EN SU ARREGLO DE PRODUCTOS
    const newProduct = {
        title: obj.title,
        price: obj.price,
        pictureUrl: obj.pictureUrl,
        description: obj.description,
        category: obj.category,
        stock: obj.stock,
    }
    addDoc(queryColecction, newProduct)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            itemsProcessed++;
            if(itemsProcessed === array.length) {
              callback();
            }
        })
        .catch(error=> {
            console.error("Error adding document: ", error);
        })
});

//para comenzar a subir los documentos, ejecutar en la terminal de comandos
// npm run upload