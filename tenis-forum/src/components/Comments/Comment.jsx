import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateComment } from '../../services/comment-service';


/**
 * 
 * @param {{comments: { id: string, author: string, content: string, createdOn: string}, commentId: string, postId: string, currentUser: string, handleDeleteComment: function}} comments 
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
        //TODO: TOVA TRQBVA DA SE OPRAVI 
        
        <div className='box rounded-md border text-wrap mr-5 mt-10' style={{ overflowWrap: 'break-word' }}>
            <div className='flex flex-row justify-between items-center'>
                <h5 className='text-2xl'>{comments.author}</h5>
                <p>{comments.createdOn}</p>
            </div>
            {isEditing ? (
                <div>
                    <input type="text" value={newContent} onChange={e => setNewContent(e.target.value)} />
                    <button onClick={handleSaveComment}>Save</button>
                </div>
            ) : (
                <p>{comments.content}</p>
            )}
            <div className='flex flex-row justify-between items-center'>
                {currentUser === comments.author && !isEditing && <button onClick={handleEdit}>Edit</button>}
                {currentUser === comments.author && !isEditing && <button onClick={() => handleDeleteComment(commentId)} type="primary">Delete</button>}
            </div>
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        createdOn: PropTypes.string,
    }
    ),
    commentId: PropTypes.string,
    postId: PropTypes.string,
    currentUser: PropTypes.string,
    handleDeleteComment: PropTypes.func
}
export default Comment;