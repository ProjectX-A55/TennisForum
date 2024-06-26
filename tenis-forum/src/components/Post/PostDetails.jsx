import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { dislikePost, likePost, deletePost, updatePost, getPostById } from '../../services/post-service';
import { addComment, deleteComment, getComments, getCommentsCount } from '../../services/comment-service';
import { getUserByUserName } from '../../services/user-service';
import { useNavigate } from 'react-router-dom';
import Comment from '../Comments/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import TagsInput, { mapTags } from '../TagsInput/TagsInput';

/**
 * PostDetails component for the application.
 *
 * This component displays the details of a post, including the title, content, tags, author, and comments. 
 * It also provides functionality for liking the post, editing the post, adding a comment, deleting a comment, 
 * and deleting the post. The state of the post and the comments are managed using the useState hook and the useEffect hook 
 * is used to fetch the post and comments data and update the state when the data changes.
 *
 * @component
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string, tags: string, topic: string}, togglePostLike: function}} param0 - The post data and a function to toggle the like status of the post.
 * @returns {JSX.Element} - A JSX element representing the post details.
 */
const PostDetails = ({ post: postProp, togglePostLike }) => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [post, setPost] = useState(postProp);
    const [title, setTitle] = useState(postProp.title);
    const [tags, setTags] = useState(postProp.tags);
    const [content, setContent] = useState(postProp.content);
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [postCommentsCount, setPostCommentsCount] = useState(0);
    const [authorAvatar, setAuthorAvatar] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentPerPage] = useState(5);

    useEffect(() => {
        if (post && post.comments) {
            setPostCommentsCount(Object.keys(post.comments).length);
        } else {
            setPostCommentsCount(0);
        }
    }, [post])

    useEffect(() => {
        (async () => {
            const authorSnapshot = await getUserByUserName(post.author);
            setTitle(post.title);
            setContent(post.content);
            setTags(mapTags(post.tags));
            setAuthorAvatar(authorSnapshot.val()[Object.keys(authorSnapshot.val())[0]]);
        })()
    }, [post]);

    useEffect(() => {
        getComments(post.id).then(setAllComments)
    }, [comment, post.id])

    const toggleLike = async () => {
        if (post.liked.includes(userData.username)) {
            dislikePost(userData.username, post.id);
            setPost(prevPost => ({ ...prevPost, liked: prevPost.liked.filter(user => user !== userData.username) }));
        }
        else {
            likePost(userData.username, post.id);
            setPost(prevPost => ({ ...prevPost, liked: [...prevPost.liked, userData.username] }));
        }
        togglePostLike(userData.username, post);
    };

    const handleEdit = async () => {
        if (isEditing) {

            if (title.length < 16 || title.length > 64) {
                alert('Title must be between 16 and 64 characters.');
                return;
            }

            if (content.length < 32 || content.length > 8192) {
                alert('Title must be between 32 and 8192 characters.');
                return;
            }

            if (tags.length < 1) {
                alert('You must choose at least one tag.');
                return;
            }

            try {
                await updatePost(post.id, title, content, post.views, tags.map((tag) => tag.label));
                const updatedPost = await getPostById(post.id);
                setPost(updatedPost);
            } catch (error) {
                console.error('Failed to update post:', error);
            }
        }
        setIsEditing(!isEditing);
    }

    const handleAddComment = async (event) => {
        event.preventDefault();
        if (comment.length < 4 || comment.length > 5000) {
            alert('Comment must be between 4 and 5000 characters.');
            return;
        }
        try {
            await addComment(post.id, userData, comment);
            setAllComments(await getComments(post.id));
            setPostCommentsCount(await getCommentsCount(post.id));
            setComment('');

        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(post.id, commentId);
            setAllComments(await getComments(post.id));
            setPostCommentsCount(await getCommentsCount(post.id));
        } catch (error) {
            console.error('Failed to delete comment:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deletePost(userData, post.id);
            navigate('/posts');
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    }


    const totalPages = Math.ceil(Object.keys(allComments).length / commentPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const indexOfLastPost = currentPage * commentPerPage;
    const indexOfFirstPost = indexOfLastPost - commentPerPage;
    const allCommentsReversed = Object.keys(allComments).reverse();
    const currentComment = allCommentsReversed.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='mt-12'>
            <div className="place-content-center flex flex-col w-auto">
                <div className='card shadow shadow-2xl border border-amber-950 text-wrap mr-5 ml-5' style={{ overflowWrap: 'break-word' }}>
                    <div className='post-info w-full justify-between h-1/6 flex flex-row mt-2'>
                        <div className='flex flex-col ml-3'>
                            <span>Topic:</span>
                            <span>{post.topic}</span>
                        </div>
                        <div className='flex flex-row mr-2'>
                            <div>
                                <span>{`Posted by: ${post.author}`}</span><br />
                                <span>{`On: ${post.createdOn}`}</span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={authorAvatar} className="w-8 h-8 rounded-full ring ring-accent ring-offset-base-100 ring-offset-5 mr-4 ml-4" alt="User Avatar" />
                            </div>
                        </div>
                    </div>
                    {isEditing ? (
                        <div id='edit-post'>
                            <div className='mr-5 ml-5 mt-2 mb-2'>
                                <label htmlFor="input" className="label">
                                    <span className="text-base label-text">Title</span>
                                </label>
                                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" className="w-full input input-bordered" />
                            </div>
                            <div className='mr-5 ml-5 mt-2 mb-2'>
                                <TagsInput updateTags={setTags} alreadySelectedTags={tags} />
                            </div>
                            <div className='mr-5 ml-5 mt-2 mb-2'>
                                <label htmlFor="textarea" className="label">
                                    <span className="text-base label-text">Content</span>
                                </label>
                                <textarea value={content} onChange={e => setContent(e.target.value)} type="text" placeholder="Edit content" className="textarea textarea-bordered w-full shadow shadow-2xl" />
                            </div>
                        </div>
                    )
                        :
                        (
                            <>
                                <div id="content-title">
                                    <div id="post-title-info">
                                        <div className='text-center mb-10 mt-5'>
                                            <p className="text-2xl font-bold">{post.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow shadow-2xl ml-10 mr-10 mb-5 rounded-lg border border-amber-950'>
                                    <div className='ml-5 mr-5 mb-5 mt-5'>
                                        {post.content.trim().split('\n').map((paragraph, index) => <p key={index}>{paragraph}<br /></p>)}
                                    </div>
                                </div>
                            </>
                        )}
                    <div className='post-info w-full justify-between h-1/6 flex flex-row ml-2'>
                        <div className='topic ml-3 mb-5'>
                            <span>{post.tags.map((tag, index) => <button className="btn btn-xs mr-1" key={index}>{tag}</button>)}</span>
                        </div>
                        <div className='author-date mr-5'>
                            <div className='flex mb-1 justify-between mr-3'>
                                <div className='views flex flex-row mr-5'>
                                    <span className='mr-2'>{post?.views}</span>
                                    <div>
                                        <FontAwesomeIcon icon={faEye} />
                                    </div>
                                </div>
                                <div className='views flex flex-row mx-5'>
                                    <span className='mr-2'>{post.liked?.length}</span>
                                    <div>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                                <div className='views flex flex-row ml-5 '>
                                    <span className='mr-2'>{postCommentsCount}</span>
                                    <div>
                                        <FontAwesomeIcon icon={faComment} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons mt-4 flex items-center justify-between'>
                    <div className='like-dislike-button ml-5'>
                        <button data-testid='like-button' onClick={toggleLike} className=" btn btn-outline btn-primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</button>
                    </div>
                    <div className='user-buttons'>
                        {(userData?.username === post.author || userData?.isAdmin === true) && userData?.isBlocked === false && (
                            <>
                                <div className='edit-button mr-5'>
                                    {isEditing && (
                                        <button onClick={() => { setPost(postProp); setIsEditing(false); }} className="btn btn-outline btn-error mr-3">Cancel</button>
                                    )}
                                    <button data-testid='edit-button' onClick={() => { handleEdit(); }} className=" mr-3 btn btn-outline btn-success">{isEditing ? 'Save' : 'Edit'}</button>
                                    <button data-testid='delete-button' onClick={handleDelete} className="btn btn-outline btn-error">Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {userData?.isBlocked ?
                    <h1 data-testid="user-blocked" className="shadow shadow-2xl box rounded-md flex flex-row border border-amber-950 text-wrap mt-5" style={{ fontSize: '1.5em', padding: '10px' }}>{`You can't leave a comment because you are banned. Sorry not sorry. Hasta la vista, baby.`} </h1 >
                    :
                    <div className='add-comment sm:w-full md:w-3/4 lg:w-3/4 mt-10 sm:ml-5 mr-5'>
                        <form onSubmit={handleAddComment}>
                            <div className='flex justify-center mb-5'>
                                <img className='w-24 h-24 lg:w-24 lg:h-24 rounded-full shadow-lg mr-3 ml-3' src={userData?.avatarUrl} alt="User Avatar" />
                                <div className='flex w-full h-full relative'>
                                    <div className='w-full flex flex-row justify-between'>
                                        <textarea data-testid='comment-input' placeholder="Add your comment ..." className="textarea textarea-bordered w-5/6 shadow shadow-2xl h-24" value={comment} onChange={e => setComment(e.target.value)} />
                                        <div className='add-comment-button 1/6 mt-5 ml-3'>
                                            <button data-testid="comment-button" className="btn btn-outline btn-primary" type="submit">{`Add comment`}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                <div className='shadow shadow-2xl border border-amber-950 rounded-md text-wrap mr-5 ml-5 mt-10' style={{ overflowWrap: 'break-word' }}>
                    <div className='text-center mt-3 mb-3'>
                        <h1><b>Comments</b></h1>
                    </div>
                    <div id="comments" >
                        {Object.keys(allComments).length === 0 && <div className="text-center">{`No comments yet`}</div>}
                        {currentComment.map((commentKey) =>
                            <Comment key={commentKey}
                                comments={allComments[commentKey]}
                                postId={post.id} currentUser={userData.username}
                                isBlocked={userData.isBlocked} isAdmin={userData.isAdmin}
                                commentId={commentKey} handleDeleteComment={handleDeleteComment} />
                        )}
                        <div className="justify-center flex mb-5">
                            {currentPage > 1 && <button className="join-item btn btn-outline mr-1" onClick={() => paginate(currentPage - 1)}>Previous</button>}
                            {pageNumbers.map(number => (
                                <button key={number} className={`join-item btn mr-1 ${number === currentPage ? 'btn-primary' : ''}`} onClick={() => paginate(number)}>{number}</button>
                            ))}
                            {currentPage < totalPages && <button className="join-item btn btn-outline" onClick={() => paginate(currentPage + 1)}>Next</button>}
                        </div>
                    </div>
                </div>
            </div>
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
        liked: PropTypes.array,
        tags: PropTypes.array,
        topic: PropTypes.string

    }),
    togglePostLike: PropTypes.func
}

export default PostDetails;
