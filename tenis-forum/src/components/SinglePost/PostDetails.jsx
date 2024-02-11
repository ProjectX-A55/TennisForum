import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, Flex } from 'antd';
import { dislikePost, likePost, deletePost } from '../../services/post-service';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} param0 
 * @returns 
 */
const PostDetails = ({ post, togglePostLike }) => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    const toggleLike = async () => {
        if (post.liked.includes(userData.username)) {
            dislikePost(userData.username, post.id);
        }
        else {
            likePost(userData.username, post.id);
        }
        togglePostLike(userData.username, post);
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
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{`Posted by: ${post.author}`}</p>
            <p>{`Posted on: ${post.createdOn}`}</p>
            <Flex>
                <Button onClick={toggleLike} type="primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</Button>
                {userData?.username === post.author && <Button onClick={handleDelete} type="primary" danger>Delete</Button>}
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