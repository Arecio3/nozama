import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWcAGzqaCWoTJZxMu2z0gJgs4InD2O1dI",
    authDomain: "nozama-53fd6.firebaseapp.com",
    projectId: "nozama-53fd6",
    storageBucket: "nozama-53fd6.appspot.com",
    messagingSenderId: "614881357118",
    appId: "1:614881357118:web:95d506288a40cd8b5fd06f",
    measurementId: "G-LRB2BTFLFE",
  };

// sets up our firebase app and passes in the needed credentials
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Initialize Database (firestore is real time database from firebase)
const db = firebaseApp.firestore();
// Gives us access to a var to handle signing in
const auth = firebase.auth()

export { db, auth };
