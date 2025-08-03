// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyDeF9yNJHxEHFCOlt4ByC7ewhFGVq-oAUM",
 authDomain: "tradegram-31363.firebaseapp.com",
 projectId: "tradegram-31363",
 storageBucket: "tradegram-31363.firebasestorage.app",
 messagingSenderId: "945025432271",
 appId: "1:945025432271:web:0f43abedbde07f5dd515ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";      AIzaSyDeF9yNJHxEHFCOlt4ByC7ewhFGVq-oAUM
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDeF9yNJHxEHFCOlt4ByC7ewhFGVq-oAUM",
//   authDomain: "tradegram-31363.firebaseapp.com",
//   projectId: "tradegram-31363",
//   storageBucket: "tradegram-31363.firebasestorage.app",
//   messagingSenderId: "945025432271",
//   appId: "1:945025432271:web:0f43abedbde07f5dd515ba"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);