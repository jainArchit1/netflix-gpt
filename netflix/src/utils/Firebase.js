// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTW2Le12hNFq9K3mn6O50SnMNsHNMREpE",
  authDomain: "netflixgptapp-3a909.firebaseapp.com",
  projectId: "netflixgptapp-3a909",
  storageBucket: "netflixgptapp-3a909.appspot.com",
  messagingSenderId: "355193999400",
  appId: "1:355193999400:web:a4341828b7a27f0d07e51d",
  measurementId: "G-CKNMKPTGRD",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
