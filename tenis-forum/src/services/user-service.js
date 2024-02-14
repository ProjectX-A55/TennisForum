import { get, set, ref, query, equalTo, orderByChild, } from 'firebase/database';
import { db } from '../config/firebase-config';


export const getUserByUserName = (username) => {

  return get(ref(db, `users/${username}`));
};

export const createUserUserName = (username, firstName, lastName, uid, email) => {

  return set(ref(db, `users/${username}`), {
    username,
    firstName,
    lastName,
    uid,
    email,
    createdOn: new Date().toString(),
    likedPosts: {},
    avatar: `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg` // https://i.stack.imgur.com/l60Hf.png
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

