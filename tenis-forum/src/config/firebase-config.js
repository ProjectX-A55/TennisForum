import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState, useEffect } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyAPsq4gobElVQBs3pA0MVXNzRnaPNhBewk",
  authDomain: "tennis-forum-12fa0.firebaseapp.com",
  databaseURL: "https://tennis-forum-12fa0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tennis-forum-12fa0",
  storageBucket: "tennis-forum-12fa0.appspot.com",
  messagingSenderId: "625602299697",
  appId: "1:625602299697:web:19c66cdb8a52b5519d9210",
};


const app = initializeApp(firebaseConfig);

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}



export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage();
