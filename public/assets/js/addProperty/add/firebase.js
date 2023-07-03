// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue, set, child, update, remove } 
from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAel-TKJzL5i3kcTJ8TSd1JgZi1jYy2i9g",
  authDomain: "estate-db7e2.firebaseapp.com",
  projectId: "estate-db7e2",
  storageBucket: "estate-db7e2.appspot.com",
  messagingSenderId: "456188295372",
  appId: "1:456188295372:web:99c9d5eed41beba02aaa69",
  measurementId: "G-H14ZVNDPVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase()

export {db, ref, onValue, set, child, update, remove}