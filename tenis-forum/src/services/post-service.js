import { ref, push, get, query, equalTo, orderByChild, update } from 'firebase/database';
import { db } from '../config/firebase-config';

export const addPost = async (author, title, content) => {
    return push(ref(db, 'posts'), {
        author,
        title,
        content,
        createdOn: new Date().toISOString(),
    });
}


export const getAllPosts = async (search) => {
    const snapShot = await get(query(ref(db, 'posts'), orderByChild('createdOn')));
    if (!snapShot.exists()) {
        return [];
    }

    const posts = Object.keys(snapShot.val()).map(key => ({
        id: key,
        ...snapShot.val()[key],
        createdOn: new Date(snapShot.val()[key].createdOn).toString(),
        likedBy: snapShot.val()[key].likedBy ? Object.keys(snapShot.val()[key].likedBy) : [],
    })).filter(post => post.title.toLowerCase().includes(search.toLowerCase()))

    console.log(posts);
    return posts;
}