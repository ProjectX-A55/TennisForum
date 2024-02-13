import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateComment } from '../../services/comment-service';


/**
 * 
 * @param {{comments: { id: string, author: string, content: string, createdOn: string}}} comments 
 */

const Comment = ({ comments, commentId, postId, currentUser, handleDeleteComment }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(comments.content);

    const handleEdit = () => {
        setIsEditing(true);
    };


    const handleSaveComment = async () => {
        await updateComment(postId, commentId, newContent);
        comments.content = newContent;
        setIsEditing(false);
    };


    return (
        <div className='comments'>
            <h5>{comments.author}</h5>
            {isEditing ? (
                <div>
                    <input type="text" value={newContent} onChange={e => setNewContent(e.target.value)} />
                    <button onClick={handleSaveComment}>Save</button>
                </div>
            ) : (
                <p>{comments.content}</p>
            )}
            <p>{comments.createdOn}</p>
            {currentUser === comments.author && !isEditing && <button onClick={handleEdit}>Edit</button>}
            {currentUser === comments.author && !isEditing && <button onClick={() => handleDeleteComment(commentId)} type="primary">Delete</button>}
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