import PropTypes from 'prop-types';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: boolean, author: string}}} param0 
 * @returns 
 */
const Post = ({post}) => {
    return (
        <div>
        SinglePost
        </div>
    );
 };

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        createdOn: PropTypes.string,
        liked: PropTypes.bool
    })
}

export default Post;