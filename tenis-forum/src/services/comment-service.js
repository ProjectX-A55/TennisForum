import { ref, push, get, update, remove } from 'firebase/database';
import { db } from '../config/firebase-config';

/**
 * Adds a comment to a specific post.
 *
 * @param {string} postId - The ID of the post.
 * @param {Object} author - The author of the comment.
 * @param {string} author.username - The username of the author.
 * @param {string} author.uid - The unique ID of the author.
 * @param {string} content - The content of the comment.
 * @returns {Promise} A promise that resolves with the new comment reference.
 * @throws {Error} If the post does not exist.
 */
export const addComment = async (postId, author, content) => {

    const postSnapshot = await get(ref(db, `posts/${postId}`));
    
    if (!postSnapshot.exists()) {
        throw new Error('Post does not exist');
    }

    const comment = {
        author: author.username,
        authorId: author.uid,
        content,
        createdOn: new Date().toString(),
    };

    return push(ref(db, `posts/${postId}/comments`), comment);
};
/**
 * Retrieves the comments for a specific post.
 *
 * @param {string} postId - The ID of the post.
 * @returns {Promise<Array>} A promise that resolves with an array of comments. If no comments exist, an empty array is returned.
 * @throws {Error} If the database operation fails.
 */
export const getComments = async (postId) => {
    const commentsSnapshot = await get(ref(db, `posts/${postId}/comments`));
    const comments = commentsSnapshot.val()

    if (!commentsSnapshot.exists()) {
        return [];
    }

    return comments;
};
/**
 * Updates the content of a specific comment in a specific post.
 *
 * @param {string} postId - The ID of the post.
 * @param {string} commentId - The ID of the comment.
 * @param {string} content - The new content for the comment.
 * @returns {Promise} A promise that resolves when the comment is updated.
 * @throws {Error} If the comment does not exist.
 */
export const updateComment = async (postId, commentId, content) => {

    const commentSnapshot = await get(ref(db, `posts/${postId}/comments/${commentId}`));

    if (!commentSnapshot.exists()) {
        throw new Error('Comment does not exist');
    }

    return update(ref(db, `posts/${postId}/comments/${commentId}`), {
        content: content
    });
}

/**
 * Deletes a specific comment from a specific post.
 *
 * @param {string} postId - The ID of the post.
 * @param {string} commentId - The ID of the comment.
 * @returns {Promise} A promise that resolves when the comment is deleted.
 * @throws {Error} If the comment does not exist.
 */
export const deleteComment = async (postId, commentId) => {
    const commentSnapshot = await get(ref(db, `posts/${postId}/comments/${commentId}`));

    if (!commentSnapshot.exists()) {
        throw new Error('Comment does not exist');
    }

    return remove(ref(db, `posts/${postId}/comments/${commentId}`));
}

/**
 * Retrieves all comments from all posts.
 *
 * @returns {Promise<number>} A promise that resolves with the total number of comments. If no comments exist, 0 is returned.
 * @throws {Error} If the database operation fails.
 */
export const getAllComments = async () => {
    const commentsSnapshot = await get(ref(db, `posts`));
    const comments = commentsSnapshot.val()

    if (!commentsSnapshot.exists()) {
        return 0;
    }

    const totalComments = Object.values(comments).reduce((total, post) => {
        const postComments = post.comments ? Object.values(post.comments).length : 0;
        return total + postComments;
    }, 0);


    return totalComments;
};

/**
 * Retrieves the count of comments for a specific post.
 *
 * @param {string} postId - The ID of the post.
 * @returns {Promise<number>} A promise that resolves with the number of comments for the post. If no comments exist, 0 is returned.
 * @throws {Error} If the database operation fails.
 */
export const getCommentsCount = async (postId) => {
    const commentsSnapshot = await get(ref(db, `posts/${postId}/comments`));
    const comments = commentsSnapshot.val()

    if (!commentsSnapshot.exists()) {
        return 0;
    }

    return Object.values(comments).length;
}