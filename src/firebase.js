import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDz2C2pVgWRT1gKsdNS-hicz1qgTDtwxBs",
    authDomain: "todolist-6fe75.firebaseapp.com",
    databaseURL: "https://todolist-6fe75.firebaseio.com",
    projectId: "todolist-6fe75",
    storageBucket: "todolist-6fe75.appspot.com",
    messagingSenderId: "1025813726843",
    appId: "1:1025813726843:web:e2d857017fff2fa0ea04de"
});


export { firebaseConfig as firebase};

