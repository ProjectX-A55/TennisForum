import { get, set, ref, query, equalTo, orderByChild, } from 'firebase/database';
import { db, storage } from '../config/firebase-config';
import { getDownloadURL, uploadBytes, ref as Sref } from 'firebase/storage'


export const getUserByUserName = (username) => {

  return get(ref(db, `users/${username}`));
};

export const createUserUserName = (username, firstName, lastName, uid, email, avatar = "https://static.thenounproject.com/png/989418-200.png") => {

  return set(ref(db, `users/${username}`), {
    username,
    firstName,
    lastName,
    uid,
    email,
    createdOn: new Date().toString(),
    likedPosts: {},
    avatar
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

export const updateUser = (username, userData) => {

  return set(ref(db, `users/${username}`), userData);
}

export async function uploadAvatar(file, userData) {
  const fileRef = Sref(storage, userData.uid);
  
  await uploadBytes(fileRef, file);
  const avatarURL = await getDownloadURL(fileRef)

  await updateUser(userData.userName, {...userData, avatarURL});
  
  console.log(1)
}
