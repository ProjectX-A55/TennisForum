import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { dislikePost, likePost, deletePost, updatePost, getPostById } from '../../services/post-service';
import { addComment, deleteComment, getComments } from '../../services/comment-service'
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
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
    }, [post]);

    useEffect(() => {
        getComments(post.id).then(setAllComments)
    }, [comment, post.id])

    const toggleLike = async () => {
        if (post.liked.includes(userData.username)) {
            dislikePost(userData.username, post.id);
            setPost(prevPost => ({ ...prevPost, liked: prevPost.liked.filter(user => user !== userData.username) }));
        }
        else {
            likePost(userData.username, post.id);
            setPost(prevPost => ({ ...prevPost, liked: [...prevPost.liked, userData.username] }));
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
            setAllComments(await getComments(post.id));
            setComment('');
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(post.id, commentId);
            setAllComments(await getComments(post.id));
        } catch (error) {
            console.error('Failed to delete comment:', error);
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
        <div className="posts w-auto w-full mt-7 mb-5 justify-center">
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

            <button onClick={toggleLike} type="primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</button>
            {userData?.username === post.author && (
                <>
                    <button onClick={handleEdit} type="primary">{isEditing ? 'Save' : 'Edit'}</button>
                    <button onClick={handleDelete} type="primary" >Delete</button>
                </>
            )}

            <div className='add-comment'>
                <h3>Add comment</h3>
                <form onSubmit={handleAddComment}>
                    <textarea value={comment} onChange={e => setComment(e.target.value)} />
                    <br />
                    <button type="submit">Add comment</button>
                </form>
            </div>
            <div>
                {Object.keys(allComments).map((commentKey) =>
                    <Comment key={commentKey} comments={allComments[commentKey]} postId={post.id} currentUser={userData.username} commentId={commentKey} handleDeleteComment={handleDeleteComment} />
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