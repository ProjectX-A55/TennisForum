// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkwP1O9HDuvKXGAqIEUr-TLG-0SlLoydY",
  authDomain: "tennis-forum-projectx.firebaseapp.com",
  projectId: "tennis-forum-projectx",
  storageBucket: "tennis-forum-projectx.appspot.com",
  messagingSenderId: "86376823601",
  appId: "1:86376823601:web:225f9290feaba384c70e10",

  dataBaseURL: "https://tennis-forum-projectx-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
