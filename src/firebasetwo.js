import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyApXohdLxCUYXlorWGY9falmOH4qmZp4oY",
    authDomain: "agg-devtest.firebaseapp.com",
    projectId: "agg-devtest",
    storageBucket: "agg-devtest.appspot.com",
    messagingSenderId: "871115522288",
    appId: "1:871115522288:web:1f576d3eaa5cae62580235"
};

firebase.initializeApp(config)

const db = firebase.firestore()

db.settings({ timestampInSnapshots: true });