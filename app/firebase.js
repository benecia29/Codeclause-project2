import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnp3cINEshjUr0GS3xNEJNDApy46QHr-M",
  authDomain: "login-authentication-da9b4.firebaseapp.com",
  projectId: "login-authentication-da9b4",
  storageBucket: "login-authentication-da9b4.appspot.com",
  messagingSenderId: "539495219795",
  appId: "1:539495219795:web:bc4022523ec67f9b98fca6"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;     