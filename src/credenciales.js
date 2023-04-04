// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwTLge2oaWnArCG_9xBRhWBLYr1z4qN50",
  authDomain: "reactystorage.firebaseapp.com",
  projectId: "reactystorage",
  storageBucket: "reactystorage.appspot.com",
  messagingSenderId: "145942441839",
  appId: "1:145942441839:web:753f5232631fef6b1a029a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase
