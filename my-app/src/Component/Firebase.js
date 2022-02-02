import firebase from "firebase/app"
import { initializeApp } from "@firebase/app";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { set, ref, getDatabase, update } from "firebase/database"
// import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage"
import { useState, useEffect } from "react";
import avatar from "../png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"

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
const database = getDatabase(app)

export function logout() {
    return signOut(auth)
}

export function Login(email,pwd) {
    
    return signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const date = new Date()
        set(ref(database, "users/" + user.uid), {
            lastSeen: date,
            email: email,
            pwd: pwd
        })
        alert('User logged in')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });


}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, user => {
           
            return setCurrentUser(user)})

        return unSub
    }, [])

    
    return currentUser
}



