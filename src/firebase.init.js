// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcsU8aF_1ilA6rZy0krcjdHktpGsKc_Nc",
    authDomain: "ema-john-simple-a1b7e.firebaseapp.com",
    projectId: "ema-john-simple-a1b7e",
    storageBucket: "ema-john-simple-a1b7e.appspot.com",
    messagingSenderId: "951811371692",
    appId: "1:951811371692:web:154e272d633d0d1ffb2509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;