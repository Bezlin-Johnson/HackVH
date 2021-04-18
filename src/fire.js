import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBhKN6FJG4T6PRW6P14vNPI5CKh9y8FdZA",
  authDomain: "hack-1caf8.firebaseapp.com",
  projectId: "hack-1caf8",
  storageBucket: "hack-1caf8.appspot.com",
  messagingSenderId: "171020348113",
  appId: "1:171020348113:web:1266012e7cc9d29451f3f0",
  measurementId: "G-TJFMPKD26G",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
