import { get, set, ref, query, equalTo, orderByChild, update} from 'firebase/database';
import { db } from '../config/firebase-config';

/**
 * Creates a new user in the database.
 *
 * @param {string} username - The username of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} uid - The unique ID of the user.
 * @param {string} email - The email of the user.
 * @returns {Promise} A promise that resolves when the user is created.
 * @throws {Error} If the database operation fails.
 */
export const createUserUserName = (username, firstName, lastName, uid, email,) => {

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

/**
 * Retrieves the data for a specific user.
 *
 * @param {string} uid - The unique ID of the user.
 * @returns {Promise<Object|null>} A promise that resolves with the user data object, or null if the user does not exist. 
 * The user data object includes properties 'username', 'firstName', 'lastName', 'uid', and 'email'.
 * @throws {Error} If the database operation fails.
 */
export const getUserData = (uid) => {

  return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};

/**
 * Retrieves all posts authored by a specific user.
 *
 * @param {string} username - The username of the user.
 * @returns {Promise<Array>} A promise that resolves with an array of posts authored by the user. 
 * Each post is an object with properties 'id', 'createdOn', and 'liked'. If no posts exist, an empty array is returned.
 * @throws {Error} If the database operation fails.
 */
export const getUserPosts = (username) => {

  return get(query(ref(db, 'posts'), orderByChild('author'), equalTo(username)));
};

/**
 * Retrieves all users from the database.
 *
 * @returns {Promise<Array>} A promise that resolves with an array of users. Each user is an object with properties 
 * 'username', 'firstName', 'lastName', 'uid', and 'email'. If no users exist, an empty array is returned.
 * @throws {Error} If the database operation fails.
 */
export const getAllUsers = async () => {

  return get(ref(db, 'users'));
}

/**
 * Updates the data for a specific user.
 *
 * @param {string} username - The username of the user.
 * @param {Object} userData - The new data for the user. This can include properties 'firstName', 'lastName', 'uid', and 'email'.
 * @returns {Promise} A promise that resolves when the user data is updated.
 * @throws {Error} If the user does not exist or the database operation fails.
 */
export const updateUser = async (username, userData) => {

  const userRef = ref(db, `users/${username}`)
  await update(userRef, userData)
}

/**
 * Retrieves the data for a user by their username.
 *
 * @param {string} username - The username of the user.
 * @returns {Promise<Object|null>} A promise that resolves with the user data object, or null if the user does not exist. 
 * The user data object includes properties 'username', 'firstName', 'lastName', 'uid', and 'email'.
 * @throws {Error} If the database operation fails.
 */
export const getUserByUserName = async (username) => {

  return get(ref(db, `users/${username}`));
  
};
