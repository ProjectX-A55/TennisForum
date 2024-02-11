import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, Flex } from 'antd';
import { dislikePost, likePost } from '../../services/post-service';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} param0 
 * @returns 
 */
const PostDetails = ({ post, togglePostLike }) => {

    const { userData } = useContext(AppContext);
    
    const toggleLike = async () => {
        if (post.liked.includes(userData.username)) {
            dislikePost(userData.username, post.id);
        }
        else {
            likePost(userData.username, post.id);
        }
        togglePostLike(userData.username, post);
    };
    
    return (
        <div className='post-info'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{`Posted by: ${post.author}`}</p>
            <p>{`Posted on: ${post.createdOn}`}</p>
            <Flex>
                <Button onClick={toggleLike} type="primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</Button>
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