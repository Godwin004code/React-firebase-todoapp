import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { set, ref, getDatabase, update } from "firebase/database"
import { useState, useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyAul6Izj8mrx8_Vb2OMJ6R8tF-zfodEOr4",
    authDomain: "react-todo-app-ed0fb.firebaseapp.com",
    projectId: "react-todo-app-ed0fb",
    storageBucket: "react-todo-app-ed0fb.appspot.com",
    messagingSenderId: "1029888453751",
    appId: "1:1029888453751:web:f1806e16a1d59d8e912a72"
  };
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const database = getDatabase(app)

export function signUp(email,pwd) {
    return createUserWithEmailAndPassword(auth, email, pwd)
     .then((userCredential) => {
         const user = userCredential.user
 
         set(ref(database, "users/" + user.uid), {
             email: email,
             pwd: pwd
             })
             
             alert('User created')
     })
     .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert(errorMessage)
         // ..
     });
 }
 

 