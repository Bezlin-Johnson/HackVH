import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhKN6FJG4T6PRW6P14vNPI5CKh9y8FdZA",
  authDomain: "hack-1caf8.firebaseapp.com",
  projectId: "hack-1caf8",
  storageBucket: "hack-1caf8.appspot.com",
  messagingSenderId: "171020348113",
  appId: "1:171020348113:web:1266012e7cc9d29451f3f0",
  measurementId: "G-TJFMPKD26G",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
