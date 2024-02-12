import PropTypes from 'prop-types';
/**
 * 
 * @param {{comments: { id: string, author: string, content: string, createdOn: string}}} comments 
 */
const Comment = ({ comments }) => {

    return (
        <div className='comments'>
            <h5>{comments.author}</h5>
            <p>{comments.content}</p>
            <p>{comments.createdOn}</p>
        </div>
    )

}

Comment.propTypes = {
    comments: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        createdOn: PropTypes.string,
    }),
}
export default Comment;