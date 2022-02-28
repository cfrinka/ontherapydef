import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCN72DawajxrlIUkYzK71ML6sYkc8jwZH0",
    authDomain: "ontherapydef.firebaseapp.com",
    projectId: "ontherapydef",
    storageBucket: "ontherapydef.appspot.com",
    messagingSenderId: "269000631389",
    appId: "1:269000631389:web:fd52df10464375181519b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)