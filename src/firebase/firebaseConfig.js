// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASblwy4pN8wQpnfecngLakD7KXKF7Ggj4",
    authDomain: "sprint-3-b76ff.firebaseapp.com",
    projectId: "sprint-3-b76ff",
    storageBucket: "sprint-3-b76ff.appspot.com",
    messagingSenderId: "774906182620",
    appId: "1:774906182620:web:b76b5e148a78f2b3356d19"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app,
  google,
  facebook,
  db
}