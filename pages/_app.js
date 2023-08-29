import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import firebaseConfig from "../app/firebase.js";
import firebaseApp from '../app/firebase.js';
 // Import your Firebase config

// const app = initializeApp(firebaseConfig); // Initialize your Firebase app

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


