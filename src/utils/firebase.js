// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOhJ_urkQ01DAkSGzEVhgw1KkSRJ3a5_w",
  authDomain: "netflix-gpt-783c4.firebaseapp.com",
  projectId: "netflix-gpt-783c4",
  storageBucket: "netflix-gpt-783c4.appspot.com",
  messagingSenderId: "343411743005",
  appId: "1:343411743005:web:b4564cbf0adee77befa9f4",
  measurementId: "G-EB90F7444G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
