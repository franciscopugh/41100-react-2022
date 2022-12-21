import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-2022-8c29e.firebaseapp.com",
  projectId: "react-2022-8c29e",
  storageBucket: "react-2022-8c29e.appspot.com",
  messagingSenderId: "45323425130",
  appId: "1:45323425130:web:7de30417195ca058574113"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export {cargarBDD}