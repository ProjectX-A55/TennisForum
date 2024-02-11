import { ref, push, get, query, equalTo, orderByChild, update } from 'firebase/database';
import { db } from '../config/firebase-config';

export const addPost = async (author, title, content) => {
    
    return push(ref(db, 'posts'), {
        author,
        title,
        content,
        createdOn: new Date().toString(),
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
        createdOn: new Date(snapShot.val()[key].createdOn).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        liked: snapShot.val()[key].liked ? Object.keys(snapShot.val()[key].liked) : [],
    })).filter(post => post.title.toLowerCase().includes(search.toLowerCase()))

    console.log(posts);
    return posts;
}

export const getPostById = async (id) => {
    const snapShot = await get(ref(db, `posts/${id}`));
    if (!snapShot.exists()) {
        return null;
    }

    const post = {
        id,
        ...snapShot.val(),
        createdOn: new Date(snapShot.val().createdOn).toString(),
        liked: snapShot.val().liked ? Object.keys(snapShot.val().liked) : [],
    };

    return post;
};


export const likePost = (username, postId) => {
    const updateLikes = {};
    updateLikes[`/posts/${postId}/liked/${username}`] = true;
    updateLikes[`/users/${username}/likedPosts/${postId}`] = true;

    return update(ref(db), updateLikes);
};

export const dislikePost = (username, postId) => {
    const updateLikes = {};
    updateLikes[`/posts/${postId}/liked/${username}`] = null;
    updateLikes[`/users/${username}/likedPosts/${postId}`] = null;

    return update(ref(db), updateLikes);
};