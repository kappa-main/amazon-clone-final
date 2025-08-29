import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBeGyjhgBDKMnNeCuxcClelOd2EabZsdTo",
    authDomain: "challenge2-5e031.firebaseapp.com",
    projectId: "challenge2-5e031",
    storageBucket: "challenge2-5e031.appspot.com",
    messagingSenderId: "23140564594",
    appId: "1:23140564594:web:0750ad516172e4394a8ceb",
    measurementId: "G-ZYV9QRCMSV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };