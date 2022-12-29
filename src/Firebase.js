// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZEjcMmtrSYQVnrwn8nwYY1rIvjTTd6V0",
  authDomain: "nanflix-clone.firebaseapp.com",
  projectId: "nanflix-clone",
  storageBucket: "nanflix-clone.appspot.com",
  messagingSenderId: "228106203718",
  appId: "1:228106203718:web:bb82764d087d9d12731047",
  measurementId: "G-MDWJ1S20ME"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);