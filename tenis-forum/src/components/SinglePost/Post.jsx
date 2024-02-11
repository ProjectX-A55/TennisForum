import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: boolean, author: string}}} param0 
 * @returns 
 */
const Post = ({ post }) => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='post-info'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <p>{post.createdOn}</p>
            <Flex>
                <Button onClick={() => navigate(`/posts/${post.id}`)} type="primary">See full post</Button>
            </Flex>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        createdOn: PropTypes.string,
        author: PropTypes.string,
        liked: PropTypes.bool
    })
}

export default Post;