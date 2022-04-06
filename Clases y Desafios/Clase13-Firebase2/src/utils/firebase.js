import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGoO5EdVzjz3RW3xokeSksSJoAhysQZAQ",
  authDomain: "coder-28200.firebaseapp.com",
  projectId: "coder-28200",
  storageBucket: "coder-28200.appspot.com",
  messagingSenderId: "212403049720",
  appId: "1:212403049720:web:85526b47e17cdfdfd1170d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export default db