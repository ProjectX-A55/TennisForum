import { ref, push, get, query, equalTo, orderByChild, update } from 'firebase/database';
import { db } from '../config/firebase-config';

export const addPost = async (author, title, content) => {
    return push(ref(db, 'posts'), {
        author,
        title,
        content,
        createdOn: new Date().toISOString(),
        liked: false
    });
 }