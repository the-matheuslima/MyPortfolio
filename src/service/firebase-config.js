import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAQph6FAYo9XT6YmEuwBxF8783JSCrrxwA",
    authDomain: "portfolio-94ddd.firebaseapp.com",
    projectId: "portfolio-94ddd",
    storageBucket: "portfolio-94ddd.appspot.com",
    messagingSenderId: "641348127110",
    appId: "1:641348127110:web:6277d4b6f3045417180407"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);