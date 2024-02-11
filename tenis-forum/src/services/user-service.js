import { get, set, ref, query, equalTo, orderByChild } from 'firebase/database';
import { db } from '../config/firebase-config';

export const getUserByUserName = (username) => {

  return get(ref(db, `users/${username}`));
};

export const createUserUserName = (username, uid, email) => {

  return set(ref(db, `users/${username}`), {username, uid, email, createdOn: new Date().toString(), likedPosts: {} })
};

export const getUserData = (uid) => {

  return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};