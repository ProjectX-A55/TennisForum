// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPsq4gobElVQBs3pA0MVXNzRnaPNhBewk",
  authDomain: "tennis-forum-12fa0.firebaseapp.com",
  databaseURL: "https://tennis-forum-12fa0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tennis-forum-12fa0",
  storageBucket: "tennis-forum-12fa0.appspot.com",
  messagingSenderId: "625602299697",
  appId: "1:625602299697:web:19c66cdb8a52b5519d9210",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage();
