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
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string, tags: string, topic: string}, togglePostLike: function}} param0 
 * @returns 
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
    const [initialPost, setInitialPost] = useState(post);
    const [authorAvatar, setAuthorAvatar] = useState(null);

    useEffect(() => {
        if (post && post.comments) {
            setPostCommentsCount(Object.keys(post.comments).length);
        } else {
            setPostCommentsCount(0);
        }
    }, [post])


    useEffect(() => {
        (async () => {
            const authorSnapshot = (await getUserByUserName(post.author));
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
    debugger
    return (
        <div>
            <div className="place-content-center flex flex-col w-auto">
                <div className='card shadow shadow-2xl border border-amber-950 text-wrap mr-5 ml-5' style={{ overflowWrap: 'break-word' }}>
                    <div className='post-info w-full justify-between h-1/6 flex flex-row mt-2 mr-2 ml-2'>
                        <div className='topic ml-3'>
                            <span>{post.topic}</span>
                        </div>
                        <div className='author-date flex items-start justify-between'>
                            <div>
                                <span>{`Posted by: ${post.author}`}</span><br />
                                <span>{`On: ${post.createdOn}`}</span>
                            </div>
                            <div>
                                <img src={authorAvatar} className="w-12 h-12 lg:w-12 lg:h-12 rounded-full shadow-lg mr-4 ml-4" alt="User Avatar" />
                            </div>
                        </div>
                    </div>
                    {isEditing ? (
                        <>
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
                        </>
                    )
                        :
                        (
                            <>
                                <div className="content-title">
                                    <div className="post-title-info">
                                        <div className='post-title text-center mb-10 mt-5'>
                                            <p className="text-2xl font-bold">{post.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card content shadow shadow-2xl ml-10 mr-10 mb-5  border border-amber-950'>
                                    <p className='ml-5 mr-5 mb-5 mt-5'>
                                        {post.content}
                                    </p>
                                </div>
                            </>)}
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
                <div className='buttons mt-4 flex items-center justify-between'>
                    <div className='like-dislike-button ml-5'>
                        <button onClick={toggleLike} className="btn btn-outline btn-primary">{post.liked.includes(userData?.username) ? 'Dislike' : 'Like'}</button>
                    </div>
                    <div className='user-buttons'>
                        {(userData?.username === post.author || userData?.isAdmin === true) && (
                            <>
                                <div className='edit-button mr-5'>
                                    {isEditing && (
                                        <button onClick={() => { setPost(postProp); setIsEditing(false); }} className="btn btn-outline btn-error mr-3">Cancel</button>
                                    )}
                                    <button onClick={() => { handleEdit(); setInitialPost(post); }} className=" mr-3 btn btn-outline btn-success">{isEditing ? 'Save' : 'Edit'}</button>
                                    <button onClick={handleDelete} className="btn btn-outline btn-error">Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='add-comment w-3/4 mt-10 ml-20 '>
                    <form onSubmit={handleAddComment}>
                        <div className='flex justify-center'>
                            <img className='w-24 h-24 lg:w-24 lg:h-24 rounded-full shadow-lg mr-3' src={userData.avatarUrl} alt="User Avatar" />
                            <div className='flex w-full h-full relative'>
                                <div className='w-full flex'>
                                    <textarea placeholder="Add your comment ..." className="textarea textarea-bordered w-full shadow shadow-2xl h-24" value={comment} onChange={e => setComment(e.target.value)} />
                                    <div className='add-comment-button 1/6 mt-3 ml-3 flex items-stretch '>
                                        <button className="btn btn-outline btn-primary self-stretch" type="submit">Add comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='shadow shadow-2xl border border-amber-950 rounded-md text-wrap mr-5 ml-5 mt-10' style={{ overflowWrap: 'break-word' }}>
                    <div className='text-center mt-3 mb-3'>
                        <h1>Comments</h1>
                    </div>
                    <div className="flex-shrink-0 mb-3" >
                        {Object.keys(allComments).length === 0 && <div className="text-center">No comments yet</div>}
                        {Object.keys(allComments).map((commentKey) =>
                            <Comment key={commentKey} comments={allComments[commentKey]} postId={post.id} currentUser={userData.username} isAdmin={userData.isAdmin} commentId={commentKey} handleDeleteComment={handleDeleteComment} />
                        )}
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