import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDDXGpc50YzSsf3_YHKnLVzBuwNq8jOHm8",
  authDomain: "react-flashcards-a1666.firebaseapp.com",
  databaseURL: "https://react-flashcards-a1666.firebaseio.com",
  projectId: "react-flashcards-a1666",
  storageBucket: "react-flashcards-a1666.appspot.com",
  messagingSenderId: "164827278028",
  appId: "1:164827278028:web:c7ce1cc78381c967187069",
  measurementId: "G-0W1VCWR40R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
