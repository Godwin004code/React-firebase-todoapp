import { useState, useEffect } from "react";

import firebase from "firebase/app"
import { initializeApp } from "@firebase/app";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage"
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAul6Izj8mrx8_Vb2OMJ6R8tF-zfodEOr4",
    authDomain: "react-todo-app-ed0fb.firebaseapp.com",
    projectId: "react-todo-app-ed0fb",
    storageBucket: "react-todo-app-ed0fb.appspot.com",
    messagingSenderId: "1029888453751",
    appId: "1:1029888453751:web:f1806e16a1d59d8e912a72"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const storage = getStorage()



export function useAuth() {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unSub
    }, [])


    
    
    return currentUser
}

// storage

