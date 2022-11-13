import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGOXgXVd9ZDMOsLY2fBt9oop7_Bm9eKLI",
  authDomain: "burger-queen-59263.firebaseapp.com",
  projectId: "burger-queen-59263",
  storageBucket: "burger-queen-59263.appspot.com",
  messagingSenderId: "212987448123",
  appId: "1:212987448123:web:60c43a3941b1a634c7851e",
  measurementId: "G-M2HNDHZ01Y"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db }