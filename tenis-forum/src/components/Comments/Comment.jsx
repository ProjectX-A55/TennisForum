import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { updateComment } from '../../services/comment-service';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { getUserData } from '../../services/user-service';

/**
 *  * Comment component for displaying a single comment.
 *
 * This component displays the author's avatar, the author's name, the comment's content, and the time since the comment was posted. It also provides functionality for editing and deleting the comment.
 * 
 * @param {{comments: { id: string, author: string, content: string, createdOn: string, authorId: string,},  commentId: string, postId: string, currentUser: string, handleDeleteComment: function}} comments 
 * return (
 *   <Comment comments={comments} commentId={commentId} postId={postId} currentUser={currentUser} isBlocked={isBlocked} isAdmin={isAdmin} handleDeleteComment={handleDeleteComment} />
 * )
 */

const Comment = ({ comments, commentId, postId, currentUser, isBlocked, isAdmin, handleDeleteComment }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newComment, setNewComment] = useState(comments.content);
    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        (async () => {
            if (comments?.authorId) {
                const snapshot = await getUserData(comments.authorId);
                if (snapshot.exists()) {
                    setAuthorData(snapshot.val()[Object.keys(snapshot.val())[0]]);
                }
            }
        })();
    }, [comments])

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveComment = async () => {
        if (newComment.length < 4 || newComment.length > 5000) return alert('Comment must be between 4 and 5000 characters.');
        try {
            await updateComment(postId, commentId, newComment);
            comments.content = newComment;
        }
        catch (error) { console.log(error); }
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setNewComment(comments.content);
        setIsEditing(false);
    };

    return (
        <div className='shadow shadow-2xl box rounded-md flex flex-row  border border-amber-950 text-wrap ml-7 mr-7 mt-7 mb-7' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
            <div className='add-comment w-full '>
                <div className='comment-area flex'>
                    <div className="flex justify-center ml-3">
                        <img className='w-24 h-24 sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-5 mt-4' src={authorData?.avatarUrl} />
                    </div>
                    <div className='flex flex-col w-full h-full'>
                        <div className='comment-author-date flex flex-wrap m-5'>
                            <p className='comment-author mr-2 font-bold'>{comments.author}</p>
                            <p>commented {formatDistanceToNow(new Date(comments.createdOn))} ago</p>
                        </div>
                        <div className='content flex items-stretch w-full mt-3 mb-2'>
                            {isEditing ? (
                                <div className='w-full'>
                                    <textarea
                                        type="text"
                                        value={newComment}
                                        onChange={e => setNewComment(e.target.value)}
                                        className="textarea textarea-bordered w-full mr-2"
                                        placeholder="Edit"
                                    />
                                </div>
                            ) : (
                                <div className='mb-5 ml-5 mr-5'>
                                    <div>
                                        {comments.content.trim().split('\n').map((paragraph, index) =>
                                            <p key={index} className='text-ellipsis'>{paragraph}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='comment-buttons flex flex-row items-center justify-end mb-3 ml-auto'>
                {(currentUser === comments.author || isAdmin === true) && isBlocked === false && isEditing &&
                    <button className='mr-3' onClick={handleSaveComment}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                }
                {(currentUser === comments.author || isAdmin === true) && isBlocked === false && isEditing &&
                    <button className='mr-5' onClick={handleCancelEdit}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                }
                {(currentUser === comments.author || isAdmin === true) && isBlocked === false && !isEditing &&
                    <button className='mr-3' onClick={handleEdit} >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                }
                {(currentUser === comments.author || isAdmin === true) && !isEditing &&
                    <button className='mr-5' onClick={() => handleDeleteComment(commentId)} type="primary">
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
        authorId: PropTypes.string
    }
    ),
    commentId: PropTypes.string,
    postId: PropTypes.string,
    currentUser: PropTypes.string,
    handleDeleteComment: PropTypes.func,
    isBlocked: PropTypes.bool,
    isAdmin: PropTypes.bool

}
export default Comment;
