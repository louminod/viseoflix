import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZqgNWO1Hk1dJQe3zEq4vvRtvb-lNlO0g",
    authDomain: "viseoflix-cead5.firebaseapp.com",
    projectId: "viseoflix-cead5",
    storageBucket: "viseoflix-cead5.appspot.com",
    messagingSenderId: "244169002077",
    appId: "1:244169002077:web:c9e4ed61a9dc99c9c111b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;