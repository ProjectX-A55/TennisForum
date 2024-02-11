import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { Button, Flex } from 'antd';
import { dislikePost, likePost, deletePost, updatePost, getPostById } from '../../services/post-service';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} param0 
 * @returns 
 */
const PostDetails = ({ post:initialPost, togglePostLike }) => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [post, setPost] = useState(initialPost);
    const [title, setTitle] = useState(initialPost.title);
    const [content, setContent] = useState(initialPost.content);

    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
    }, [post]);

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
            <Flex>
                <Button onClick={toggleLike} type="primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</Button>
                {userData?.username === post.author && (
                    <>
                        <Button onClick={handleEdit} type="primary">{isEditing ? 'Save' : 'Edit'}</Button>
                        <Button onClick={handleDelete} type="primary" danger>Delete</Button>
                    </>
                )}
            </Flex>
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