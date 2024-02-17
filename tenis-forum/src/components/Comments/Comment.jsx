import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { updateComment } from '../../services/comment-service';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { getUserData } from '../../services/user-service';


/**
 * 
 * @param {{comments: { id: string, author: string, content: string, createdOn: string}, commentId: string, postId: string, currentUser: string, handleDeleteComment: function}} comments 
 */

const Comment = ({ comments, commentId, postId, currentUser, handleDeleteComment }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(comments.content);
    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
         (async () => {
            if (comments?.authorId) {
                const snapshot = await getUserData(comments.authorId);
                if(snapshot.exists()){
                    setAuthorData(snapshot.val()[Object.keys(snapshot.val())[0]]);
                }
                
                
            }
        })();
    }, [])

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveComment = async () => {
        await updateComment(postId, commentId, newContent);
        comments.content = newContent;
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setNewContent(comments.content);
        setIsEditing(false);
    };

    return (

        <div className='shadow shadow-2xl box rounded-md flex flex-row  border border-amber-950 text-wrap ml-7 mr-7 mt-7 mb-7' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
            <div className='add-comment w-full '>
                <div className='comment-area flex'>
                    <div className="w-32 rounded-md">
                        <img className='w-20 h-20 rounded-full' src={authorData?.avatarUrl}/>
                    </div>
                    <div className='flex flex-col w-full h-full relative'>
                        <div className='comment-author-date w-full flex'>
                            <p className='comment-author mr-2 font-bold'>{comments.author}</p>
                            <p>commented {formatDistanceToNow(new Date(comments.createdOn))} ago</p>
                        </div>
                        <div className='content flex items-stretch w-full mt-3 mb-2'>
                            {isEditing ? (
                                <div className='w-full'>
                                    <textarea
                                        type="text"
                                        value={newContent}
                                        onChange={e => setNewContent(e.target.value)}
                                        className="textarea textarea-bordered w-full mr-2"
                                        placeholder="Edit"
                                    />
                                </div>
                            ) : (
                                <div className='comment-content'>
                                    <p>{comments.content}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='comment-buttons flex flex-row items-center justify-end mb-3 ml-auto'>
                {currentUser === comments.author && isEditing &&
                    <button className='mr-3' onClick={handleSaveComment}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                }
                {currentUser === comments.author && isEditing &&
                    <button className='mr-5' onClick={handleCancelEdit}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                }
                {currentUser === comments.author && !isEditing &&
                    <button className='mr-3' onClick={handleEdit} >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                }
                {currentUser === comments.author && !isEditing &&
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
    }
    ),
    commentId: PropTypes.string,
    postId: PropTypes.string,
    currentUser: PropTypes.string,
    handleDeleteComment: PropTypes.func
}
export default Comment;