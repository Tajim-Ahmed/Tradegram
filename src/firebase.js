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

