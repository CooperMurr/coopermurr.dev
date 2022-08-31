import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyB-P8w2v7w0mXFDmwaxEWfBRK-TzVn6-NY",
    authDomain: "coopermurrdev.firebaseapp.com",
    projectId: "coopermurrdev",
    storageBucket: "coopermurrdev.appspot.com",
    messagingSenderId: "835285827881",
    appId: "1:835285827881:web:7e14d64d98f19b8215f738",
    measurementId: "G-1RWL7YXK98"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
