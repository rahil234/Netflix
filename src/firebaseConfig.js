// Import the functions you need from the SDKs you need
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; // Import only the auth serviceå
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw2BGNr_SW6rMZlU3sDuv4A30zH1r3jbs",
  authDomain: "netflix-80441.firebaseapp.com",
  projectId: "netflix-80441",
  storageBucket: "netflix-80441.appspot.com",
  messagingSenderId: "1026829099628",
  appId: "1:1026829099628:web:e3c8df240c670b3310ee49",
  measurementId: "G-EBP9DN6P22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
