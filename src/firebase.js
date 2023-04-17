import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIco02b2tzwcJbJDMkLml_YfTIfJiMH5s",
    authDomain: "somativa2-a185e.firebaseapp.com",
    projectId: "somativa2-a185e",
    storageBucket: "somativa2-a185e.appspot.com",
    messagingSenderId: "725443534538",
    appId: "1:725443534538:web:a9dba303174662e1c79e33"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };