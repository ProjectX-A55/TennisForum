import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUserName } from '../../services/user-service';
import { getPostById, updatePost } from '../../services/post-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

/**
 * PostInfo component for the application.
 *
 * This component displays a brief overview of a post, including the title, author, creation date, views, likes, and comments count. 
 * It also provides functionality for viewing the full post. The state of the post and the author are managed using the useState hook 
 * and the useEffect hook is used to fetch the post and author data and update the state when the data changes.
 *
 * @component
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} props - The post data and a function to toggle the like status of the post.
 * @returns {JSX.Element} - A JSX element representing the post info.
 */
const PostInfo = ({ post }) => {

    const [author, setAuthor] = useState(null);
    const [postInfo, setPostInfo] = useState(post);
    const [postCommentsCount, setPostViewsComments] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (postInfo && postInfo.comments) {
            setPostViewsComments(Object.keys(postInfo.comments).length);
        } else {
            setPostViewsComments(0);
        }
    }, [postInfo])

    useEffect(() => {
        getPostById(post.id).then(snapshot => setPostInfo(snapshot))
    }, [post.id])

    useEffect(() => {
        getUserByUserName(post.author).then(snapshot => setAuthor(snapshot.val()))
    }, [post])

    const handleClick = async () => {
        if (postInfo) {
            const updatedViews = (postInfo.views || 0) + 1;
            const updatedPostInfo = {
                ...postInfo,
                views: updatedViews
            };
            setPostInfo(updatedPostInfo);
            await updatePost(post.id, post.title, post.content, updatedViews);
        }
        navigate(`/posts/${post.id}`);
    }

    return (

    <div className="flex flex-col md:flex-row justify-center items-center h-auto mb-4">
        <div className="border border-amber-950 rounded-lg w-full md:w-3/4 shadow-lg shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
            <div className="card-normal cursor-pointer flex flex-col md:flex-row" onClick={handleClick}>
                <div className='w-full md:w-1/4'>
                    <div className="avatar ml-12 mb-4 mt-4">
                        <div className="w-36 h-36 btn btn-ghost btn-circle avatar">
                            <img src={author?.avatarUrl} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    <div className="title mt-3">
                        <h1 className="text-start">{post.title}</h1>
                    </div>
                    <div className='mt-10'>
                        {postInfo.tags?.map((tag, index) => <button className="btn btn-xs mr-1" key={index}>{tag}</button>)}
                    </div>
                    <div className='postInfo flex flex-col md:flex-row justify-between'>
                        <div className='user-info text-sm mt-5'>
                            <div>
                                <p >{`Posted by: ${post.author}`}</p>
                                <p >{`Posted on: ${post.createdOn}`}</p>
                            </div>
                        </div>
                        <div className='w-full md:w-1/4 flex flex-col mr-6'>
                            <div className='flex-grow'>
                            </div>
                            <div className='flex-grow'>
                            </div>
                            <div className='flex mb-1 justify-between'>
                                <div className='views flex flex-row mr-5'>
                                    <span className='mr-2'>{postInfo?.views}</span>
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
            </div>
        </div>
    </div>
);
};

PostInfo.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        createdOn: PropTypes.string,
        author: PropTypes.string,
        liked: PropTypes.array

    }),
    togglePostLike: PropTypes.func
}

export default PostInfo;
