import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateComment } from '../../services/comment-service';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


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

        <div className='box rounded-md border text-wrap ml-7 mr-7 mt-10' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
            <div className='flex flex-row items-center'>
                <p className='text-2xl'>{comments.author}</p>
                <p>commented {formatDistanceToNow(new Date(comments.createdOn))} ago</p>
            </div>
            {isEditing ? (
                <div>
                    <input type="text" value={newContent} onChange={e => setNewContent(e.target.value)} />
                    <button onClick={handleSaveComment}>Save</button>
                </div>
            ) : (

                <div className='comment-content'>
                    <p>{comments.content}</p>
                </div>
            )}
            <div className='flex flex-row items-center'>
                {currentUser === comments.author && !isEditing &&
                    <button className='mr-3' onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                }
                {currentUser === comments.author && !isEditing &&
                    <button onClick={() => handleDeleteComment(commentId)} type="primary">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                }
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