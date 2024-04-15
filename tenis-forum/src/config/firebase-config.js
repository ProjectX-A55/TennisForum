import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_KEY,
  authDomain: "tennis-forum-12fa0.firebaseapp.com",
  databaseURL: "https://tennis-forum-12fa0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tennis-forum-12fa0",
  storageBucket: "tennis-forum-12fa0.appspot.com",
  messagingSenderId: "625602299697",
  appId: "1:625602299697:web:19c66cdb8a52b5519d9210"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);