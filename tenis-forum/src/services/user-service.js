import { get, set, ref, query, equalTo, orderByChild, update } from 'firebase/database';
import { db, storage } from '../config/firebase-config';
import { getDownloadURL, uploadBytes, ref as Sref } from 'firebase/storage'


export const getUserByUserName = async (username) => {

  return get(ref(db, `users/${username}`));
};

export const createUserUserName = (username, firstName, lastName, uid, email, ) => {

  return set(ref(db, `users/${username}`), {
    username,
    firstName,
    lastName,
    uid,
    email,
    createdOn: new Date().toString(),
    likedPosts: {},
    avatarUrl: "https://static.thenounproject.com/png/989418-200.png",
    isAdmin: false,
    isBlocked: false,
  })

};

export const getUserData = (uid) => {

  return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};

export const getUserPosts = (username) => {

  return get(query(ref(db, 'posts'), orderByChild('author'), equalTo(username)));
};

export const getAllUsers = () => {

  return get(ref(db, 'users'));
}

export const updateUser = async (username, userData) => {

  const userRef = ref(db, `users/${username}`)
  await update(userRef, userData)
}

export async function uploadAvatar(userData, file) {
  if (!file) return;

  const fileRef = Sref(storage, `avatars/${userData}/${file.name}`);
  
  const snapshot = await uploadBytes(fileRef, file);

  alert('file uploaded')
  return getDownloadURL(snapshot.ref);
}