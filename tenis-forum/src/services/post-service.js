import { ref, push, get, query, orderByChild, update, remove } from 'firebase/database';
import { db } from '../config/firebase-config';

export const addPost = async (author, title, content, topic = "General Discussions", tags = []) => {
    return push(ref(db, 'posts'), {
        author,
        title,
        content,
        createdOn: new Date().toISOString(),
        comments: [],
        topic,
        views: 0,
        tags,
    });
}

export const getAllPosts = async (search = '') => {
    const snapShot = await get(query(ref(db, 'posts'), orderByChild('createdOn')));
    if (!snapShot.exists()) {
        return [];
    }

    const posts = Object.keys(snapShot.val()).map(key => ({
        id: key,
        ...snapShot.val()[key],
        createdOn: new Date(snapShot.val()[key].createdOn).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        liked: snapShot.val()[key].liked ? Object.keys(snapShot.val()[key].liked) : [],
    }))

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
        createdOn: new Date(snapShot.val().createdOn).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        liked: snapShot.val().liked ? Object.keys(snapShot.val().liked) : [],
    };

    return post;
};


export const updatePost = async (postId, title, content, views, tags) => {
    const postSnapshot = await get(ref(db, `posts/${postId}`));
    if (!postSnapshot.exists()) {
        throw new Error('Post does not exist');
    }

    const updates = {};
    if (title) {
        updates[`/posts/${postId}/title`] = title;
    }

    if (content) {
        updates[`/posts/${postId}/content`] = content;
    }

    if (views || views === 0) {
        updates[`/posts/${postId}/views`] = views;
    }

    if (tags) {
        updates[`/posts/${postId}/tags`] = tags
    }

    return update(ref(db), updates);
};


export const deletePost = async (userData, postId) => {
    const postSnapshot = await get(ref(db, `posts/${postId}`));
    if (!postSnapshot.exists()) {
        throw new Error('Post does not exist');
    }

    const post = postSnapshot.val();
    
    if (post.author !== userData.username && userData.isAdmin !== true) {
        throw new Error('Only the author can delete this post');
    }

    return remove(ref(db, `posts/${postId}`));
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