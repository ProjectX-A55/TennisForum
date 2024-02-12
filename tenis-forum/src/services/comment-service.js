import { ref, push, get, query, orderByChild, update, remove } from 'firebase/database';
import { db } from '../config/firebase-config';


export const addComment = async (postId, author, content) => {
    const postSnapshot = await get(ref(db, `posts/${postId}`));
    if (!postSnapshot.exists()) {
        throw new Error('Post does not exist');
    }

    const comment = {
        author,
        content,
        createdOn: new Date().toString(),
    };

    return push(ref(db, `posts/${postId}/comments`), comment);
};

export const getComments = async (postId) => {
    const commentsSnapshot = await get(ref(db, `posts/${postId}/comments`));
    const comments = commentsSnapshot.val()
    
    if (!commentsSnapshot.exists()) {
        return [];
    }

    return comments;
};

export const updateComment = async (postId, commentId, content) => {

    const commentSnapshot = await get(ref(db, `posts/${postId}/comments/${commentId}`));

    if (!commentSnapshot.exists()) {
        throw new Error('Comment does not exist');
    }

    return update(ref(db, `posts/${postId}/comments/${commentId}`), {
        content: content
    });
}


export const deleteComment = async (postId, commentId) => { 
    const commentSnapshot = await get(ref(db, `posts/${postId}/comments/${commentId}`));

    if (!commentSnapshot.exists()) {
        throw new Error('Comment does not exist');
    }

    return remove(ref(db, `posts/${postId}/comments/${commentId}`));
}