import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Button } from 'antd';
import { dislikePost, likePost, deletePost, updatePost, getPostById, addComment, getComments } from '../../services/post-service';
import { useNavigate } from 'react-router-dom';
import Comment from '../Comments/Comment';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} param0 
 * @returns 
 */
const PostDetails = ({ post: initialPost, togglePostLike }) => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [post, setPost] = useState(initialPost);
    const [title, setTitle] = useState(initialPost.title);
    const [content, setContent] = useState(initialPost.content);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([])

    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
    }, [post]);

    useEffect(() => {
        getComments(post.id).then(setComments)
    }, [post.id])


    const toggleLike = async () => {
        if (post.liked.includes(userData.username)) {
            dislikePost(userData.username, post.id);
        }
        else {
            likePost(userData.username, post.id);
        }
        togglePostLike(userData.username, post);
    };

    const handleEdit = async () => {
        if (isEditing) {
            try {
                await updatePost(post.id, title, content);
                const updatedPost = await getPostById(post.id);
                setPost(updatedPost);
            } catch (error) {
                console.error('Failed to update post:', error);
            }
        }
        setIsEditing(!isEditing);
    }

    const handleAddComment = async (event) => {
        event.preventDefault();
        try {
            await addComment(post.id, userData.username, comment);
            setComment('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deletePost(userData.username, post.id);
            navigate('/posts');
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    }
    
    return (
        <div className='post-info'>
            {isEditing ? (
                <>
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                    <br />
                    <br />
                    <textarea value={content} onChange={e => setContent(e.target.value)} />
                </>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </>
            )}
            <p>{`Posted by: ${post.author}`}</p>
            <p>{`Posted on: ${post.createdOn}`}</p>
            <p>{`Liked by : ${post.liked.length} forum users`}</p>

            <Button onClick={toggleLike} type="primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</Button>
            {userData?.username === post.author && (
                <>
                    <Button onClick={handleEdit} type="primary">{isEditing ? 'Save' : 'Edit'}</Button>
                    <Button onClick={handleDelete} type="primary" danger>Delete</Button>
                </>
            )}

            <div className='add-comment'>
                <h3>Add comment</h3>
                <form onSubmit={handleAddComment}>
                    <textarea value={comment} onChange={e => setComment(e.target.value)} />
                    <br />
                    <Button type="primary" htmlType="submit">Add comment</Button>
                </form>
            </div>
            <div>
                {Object.keys(comments).map((commentId) =>
                <Comment key={commentId} comments={comments[commentId]}/>
                )}
            </div>
        </div>
    );
};

PostDetails.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        createdOn: PropTypes.string,
        author: PropTypes.string,
        liked: PropTypes.array

    }),
    togglePostLike: PropTypes.func
}

export default PostDetails;