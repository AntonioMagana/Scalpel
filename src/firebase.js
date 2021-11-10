import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyhfv3g5djAjAbLm4rDBhaGhAw7MkG05M",
  authDomain: "scalpel-sad.firebaseapp.com",
  projectId: "scalpel-sad",
  storageBucket: "scalpel-sad.appspot.com",
  messagingSenderId: "829852408226",
  appId: "1:829852408226:web:62c534603777208964fafb",
  measurementId: "G-86D8NPMYW5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;