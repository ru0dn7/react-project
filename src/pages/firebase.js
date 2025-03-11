// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZAOp59U8J1BGHglEiUmrIFPMix26cT10",
    authDomain: "react-project-7fe1c.firebaseapp.com",
    projectId: "react-project-7fe1c",
    storageBucket: "react-project-7fe1c.firebasestorage.app",
    messagingSenderId: "554787076451",
    appId: "1:554787076451:web:e26b1df78bb65b12573b56",
    measurementId: "G-JHJDQMBX04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);  