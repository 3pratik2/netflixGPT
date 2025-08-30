// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDmXCOV2iRXXF5mc4B9oVu51lG9E9WbAA",
  authDomain: "netflixgpt-43760.firebaseapp.com",
  projectId: "netflixgpt-43760",
  storageBucket: "netflixgpt-43760.firebasestorage.app",
  messagingSenderId: "686691624982",
  appId: "1:686691624982:web:3ebabc0be9fdf2e8796d37",
  measurementId: "G-9DJV2DTQZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);