import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7_U_fPfy231e1qUfF8rs1fmYg8QgtRLI",
  authDomain: "scalpel-sad-835fc.firebaseapp.com",
  projectId: "scalpel-sad-835fc",
  storageBucket: "scalpel-sad-835fc.appspot.com",
  messagingSenderId: "789366459633",
  appId: "1:789366459633:web:d7e56dde7732024770ad50"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);