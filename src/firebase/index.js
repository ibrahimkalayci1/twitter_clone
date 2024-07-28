// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBbBStLVOTUThPAbd9wTrcHH8q5paAsHII",
  authDomain: "hi-twitter-4f2c9.firebaseapp.com",
  projectId: "hi-twitter-4f2c9",
  storageBucket: "hi-twitter-4f2c9.appspot.com",
  messagingSenderId: "909701163459",
  appId: "1:909701163459:web:2982a48412769bcc27f576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
 export const auth = getAuth(app);

 // google sağlayıcısını kur
 export const provider = new GoogleAuthProvider();