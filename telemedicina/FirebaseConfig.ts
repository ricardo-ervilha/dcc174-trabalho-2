// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDdbmO8O7OTgWXAH1v6vZVH-JpZ-wWplQ",
  authDomain: "telemedicina-ufjf-ihc.firebaseapp.com",
  projectId: "telemedicina-ufjf-ihc",
  storageBucket: "telemedicina-ufjf-ihc.firebasestorage.app",
  messagingSenderId: "475890616679",
  appId: "1:475890616679:web:934a05ad5f151f592607c2",
  measurementId: "G-RBM8TEN1TR"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
