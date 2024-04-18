import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";


/**
 * Registers a new user with the provided email and password.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise} A promise that resolves with the user credential object.
 */
export const registerUser = (email, password) => { 
    return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Logs in a user with the provided email and password.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise} A promise that resolves with the user credential object.
 */
export const loginUser = (email, password) => { 
    return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Logs out the currently logged in user.
 *
 * @returns {Promise} A promise that resolves when the user is logged out.
 */
export const logoutUser = () => { 
    return signOut(auth);
}