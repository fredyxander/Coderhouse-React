import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkNP7yhsoKzCUO0w3I4YPXoXuFYRkzzsg",
    authDomain: "react-41590.firebaseapp.com",
    projectId: "react-41590",
    storageBucket: "react-41590.appspot.com",
    messagingSenderId: "42664268727",
    appId: "1:42664268727:web:de5eea90c67fa79974ce32"
};

//inciamos la conexion del proyecto react con firebase.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
