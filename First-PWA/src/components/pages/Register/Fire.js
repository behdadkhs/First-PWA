import firebase from 'firebase/compat/app'
import "firebase/compat/auth";


const fire = firebase.initializeApp({
    apiKey: "AIzaSyDKlL0fNEm4uWsJSGDvBQhotIHPWv5HF-U",

    authDomain: "mywebsite-login.firebaseapp.com",

    projectId: "mywebsite-login",

    storageBucket: "mywebsite-login.appspot.com",

    messagingSenderId: "358230756762",

    appId: "1:358230756762:web:b8314c76064a8b7036be23"




})

export const auth = fire.auth()

export default fire;
