// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyFujQQbpdoeKwuHaxqa3fMMTl6TWuhLg",
  authDomain: "quickcart-dedcd.firebaseapp.com",
  projectId: "quickcart-dedcd",
  storageBucket: "quickcart-dedcd.appspot.com",
  messagingSenderId: "909564908805",
  appId: "1:909564908805:web:7d4900022b25e58a10d36c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
