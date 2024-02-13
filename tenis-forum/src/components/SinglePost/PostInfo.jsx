import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

// import { dislikePost, likePost } from '../../services/post-service';
/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} param0 
 * @returns 
 */
const PostInfo = ({ post }) => {

    const navigate = useNavigate();

    return (
        <div className='post-info'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{`Posted by: ${post.author}`}</p>
            <p>{`Posted on: ${post.createdOn}`}</p>
                <button onClick={() => navigate(`/posts/${post.id}`)} type="primary">See full post</button>
        </div>
    );
};

PostInfo.propTypes = {
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

export default PostInfo;