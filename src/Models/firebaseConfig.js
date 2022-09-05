import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpKWz66FJp6YREJVv7JJR5KvgnXijm4ro",
  authDomain: "windows98-chat.firebaseapp.com",
  projectId: "windows98-chat",
  storageBucket: "windows98-chat.appspot.com",
  messagingSenderId: "823378771357",
  appId: "1:823378771357:web:f033c32a7c5029b6e18374"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export {firebase, db}