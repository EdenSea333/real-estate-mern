// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d8f7a.firebaseapp.com",
  projectId: "mern-estate-d8f7a",
  storageBucket: "mern-estate-d8f7a.appspot.com",
  messagingSenderId: "585851591887",
  appId: "1:585851591887:web:55b937d607a9db2cecabba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);