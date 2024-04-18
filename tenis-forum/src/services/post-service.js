import { ref, push, get, query, orderByChild, update, remove} from 'firebase/database';
import { db } from '../config/firebase-config';

/**
 * Adds a new post to the database.
 *
 * @param {string} author - The author of the post.
 * @param {string} title - The title of the post.
 * @param {string} content - The content of the post.
 * @param {string} [topic="General Discussions"] - The topic of the post.
 * @param {string[]} [tags=[]] - The tags associated with the post.
 * @returns {Promise} A promise that resolves with the new post reference.
 * @throws {Error} If the database operation fails.
 */
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

/**
 * Retrieves all posts from the database, optionally filtered by a search term.
 *
 * @param {string} [search=''] - The search term to filter posts by. If omitted, all posts are returned.
 * @returns {Promise<Array>} A promise that resolves with an array of posts. Each post is an object with properties 'id', 'createdOn', and 'liked'. If no posts exist, an empty array is returned.
 * @throws {Error} If the database operation fails.
 */
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

/**
 * Retrieves a post by its ID.
 *
 * @param {string} id - The ID of the post.
 * @returns {Promise<Object|null>} A promise that resolves with the post object, or null if the post does not exist. The post object includes properties 'id', 'createdOn', and 'liked'.
 * @throws {Error} If the database operation fails.
 */
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

/**
 * Updates a specific post in the database.
 *
 * @param {string} postId - The ID of the post.
 * @param {string} title - The new title for the post.
 * @param {string} content - The new content for the post.
 * @param {number} views - The new view count for the post.
 * @param {string[]} tags - The new tags for the post.
 * @returns {Promise} A promise that resolves when the post is updated.
 * @throws {Error} If the post does not exist.
 */
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

/**
 * Deletes a specific post from the database.
 *
 * @param {Object} userData - The data of the user attempting to delete the post.
 * @param {string} userData.username - The username of the user.
 * @param {boolean} userData.isAdmin - Whether the user is an admin.
 * @param {string} postId - The ID of the post.
 * @returns {Promise} A promise that resolves when the post is deleted.
 * @throws {Error} If the post does not exist or the user is not authorized to delete the post.
 */
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

/**
 * Likes a specific post for a specific user.
 *
 * @param {string} username - The username of the user.
 * @param {string} postId - The ID of the post.
 * @returns {Promise} A promise that resolves when the post is liked.
 * @throws {Error} If the database operation fails.
 */
export const likePost = (username, postId) => {
    const updateLikes = {};
    updateLikes[`/posts/${postId}/liked/${username}`] = true;
    updateLikes[`/users/${username}/likedPosts/${postId}`] = true;

    return update(ref(db), updateLikes);
};

/**
 * Dislikes a specific post for a specific user.
 *
 * @param {string} username - The username of the user.
 * @param {string} postId - The ID of the post.
 * @returns {Promise} A promise that resolves when the post is disliked.
 * @throws {Error} If the database operation fails.
 */
export const dislikePost = (username, postId) => {
    const updateLikes = {};
    updateLikes[`/posts/${postId}/liked/${username}`] = null;
    updateLikes[`/users/${username}/likedPosts/${postId}`] = null;

    return update(ref(db), updateLikes);
};
