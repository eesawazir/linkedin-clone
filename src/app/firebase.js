import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA54yqo3-oKxGLLftZBNTgeQ6wHorZ-_W8",
    authDomain: "linkedin-clone-df95d.firebaseapp.com",
    projectId: "linkedin-clone-df95d",
    storageBucket: "linkedin-clone-df95d.appspot.com",
    messagingSenderId: "401130863208",
    appId: "1:401130863208:web:05a44ec729af21bf3459dd",
    measurementId: "G-YP43W3082G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };