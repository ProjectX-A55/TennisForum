import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { dislikePost, likePost, deletePost, updatePost, getPostById } from '../../services/post-service';
import { addComment, deleteComment, getComments, getCommentsCount } from '../../services/comment-service'
import { useNavigate } from 'react-router-dom';
import Comment from '../Comments/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'



/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string, tags: string, topic: string}, togglePostLike: function}} param0 
 * @returns 
 */
const PostDetails = ({ post: initialPost, togglePostLike }) => {

    const { userData } = useContext(AppContext);
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [post, setPost] = useState(initialPost);
    const [title, setTitle] = useState(initialPost.title);
    const [content, setContent] = useState(initialPost.content);
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([]);
    const [postCommentsCount, setPostCommentsCount] = useState(0);

    useEffect(() => {
        if (post && post.comments) {
            setPostCommentsCount(Object.keys(post.comments).length);
        } else {
            setPostCommentsCount(0);
        }
    }, [post])

    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
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
            try {
                await updatePost(post.id, title, content);
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
        try {
            await addComment(post.id, userData.username, comment);
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
            await deletePost(userData.username, post.id);
            navigate('/posts');
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    }

    console.log(userData);
   //TODO: TRQBVA DA SE OPRAVI EDITA
    return (
        <div className="place-content-center flex flex-col w-auto">
            {isEditing ? (
                <div className='edit-content'>
                    <label htmlFor="input">Edit title </label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <br />
                    <label htmlFor="textarea">Edit content </label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="textarea textarea-bordered" placeholder="Edit"></textarea>
                </div>
            ) : (
                <div className='card border text-wrap mr-5 ml-5' style={{ overflowWrap: 'break-word' }}>
                    <div className='post-info w-full justify-between h-1/6 flex flex-row mt-2 mr-2 ml-2'>
                        <div className='topic ml-3'>
                            <span>{post.topic}</span>
                        </div>
                        <div className='author-date mr-5'>
                            <span>{`Created on: ${post.createdOn} By: ${post.author}`}</span>
                        </div>
                    </div>
                    <div className="content-title">
                        <div className="post-title-info">
                            <div className='post-title text-center mb-10 mt-5'>
                                <p className="text-5xl font-bold">{post.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card content shadow shadow-white ml-10 mr-10 mb-5'>
                        <p className='ml-5 mr-5 mb-5 mt-5'>
                            {post.content}
                        </p>
                    </div>
                    <div className='post-info w-full justify-between h-1/6 flex flex-row ml-2'>
                        <div className='topic ml-3 mb-5'>
                            <span>{post.tags.map((tag, index) => <button className="btn btn-xs mr-1" key={index}>{tag}</button>)}</span>
                        </div>
                        <div className='author-date mr-3'>
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
            )}
            <div className='buttons mt-4 flex items-center justify-between'>
                <div className='like-dislike-button ml-5'>
                    <button onClick={toggleLike} className="btn btn-outline btn-primary">{post.liked.includes(userData?.username) ? 'Dislike post' : 'Like post'}</button>
                </div>
                <div className='user-buttons'>
                    {userData?.username === post.author && (
                        <>
                            <div className='edit-button mr-5'>
                                <button onClick={handleEdit} className=" mr-3 btn btn-outline btn-success">{isEditing ? 'Save' : 'Edit'}</button>
                                <button onClick={handleDelete} className="btn btn-outline btn-error">Delete</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='add-comment w-3/4 mt-10 ml-20'>
                <form onSubmit={handleAddComment}>
                    <div className='comment-area flex'>
                        <div className="w-32 rounded-md mr-3">
                            <img className='rounded-md' src={userData.avatar} alt="" />
                        </div>
                        <div className='flex w-full h-full relative'>
                            <div className='w-full flex'>
                                <textarea placeholder="Add your comment ..." className="textarea textarea-bordered w-full" value={comment} onChange={e => setComment(e.target.value)} />
                                <div className='add-comment-button 1/6 mt-3 ml-3 flex items-stretch'>
                                    <button className="btn btn-outline btn-primary self-stretch" type="submit">Add comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='shadow shadow-white rounded-md text-wrap mr-5 ml-5 mt-10' style={{ overflowWrap: 'break-word' }}>
                <div className='text-center mt-3'>
                    <h1>Comments</h1>
                </div>
                <div className="flex-shrink-0 " >
                    {Object.keys(allComments).map((commentKey) =>
                        <Comment key={commentKey} comments={allComments[commentKey]} postId={post.id} currentUser={userData.username} commentId={commentKey} handleDeleteComment={handleDeleteComment} />
                    )}
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
        tags: PropTypes.string,
        topic: PropTypes.string

    }),
    togglePostLike: PropTypes.func
}

export default PostDetails;