import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCpnc5YATCXShllO1pquhPLJqxXC0Y1Zfg",
  authDomain: "portfolio-e632a.firebaseapp.com",
  projectId: "portfolio-e632a",
  storageBucket: "portfolio-e632a.appspot.com",
  messagingSenderId: "932087104956",
  appId: "1:932087104956:web:e04bfa4076fabe056717b9",
  measurementId: "G-1BK0YK4FQ8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
