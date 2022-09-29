import firebase from './firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "e4s-lyc-web-f1383.firebaseapp.com",
    projectId: "e4s-lyc-web-f1383",
    storageBucket: "e4s-lyc-web-f1383.appspot.com",
    messagingSenderId: "1079123934925",
    appId: "1:1079123934925:web:d05bc5ae532b4790187384",
    measurementId: "G-DDPZP04QRM"
}

firebase.intializeApp(config); 

export default firebase;