import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUserName } from '../../services/user-service';
import { getPostById, updatePost } from '../../services/post-service';


/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} props
 * @returns 
 */
const PostInfo = ({ post }) => {

    const [author, setAuthor] = useState(null);
    const [postInfo, setPostInfo] = useState(post);
    const [postCommentsCount, setPostViewsCount] = useState(0);

    useEffect(() => {
        if (postInfo && postInfo.comments) {
            setPostViewsCount(Object.keys(postInfo.comments).length);
        } else {
            setPostViewsCount(0);
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

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-auto mb-4 ">
            <div className="card w-3/4 h-auto bg-base-100 border border-white shadow-lg shadow-white transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="card-normal cursor-pointer flex" onClick={handleClick}>
                    <div className='w-1/4'>
                        <div className="avatar ml-4 mb-4 mt-4">
                            <div className="w-24 mask mask-squircle">
                                <img src={author?.avatar} />
                            </div>
                        </div>
                        <div className='user-info text-sm ml-4 mb-4'>
                            <p >{`Posted by: ${post.author}`}</p>
                            <p >{`Posted on: ${post.createdOn}`}</p>
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <div className="title ">
                            <h1 className="text-start">{post.title}</h1>
                        </div>
                        <div className="content text-start mt-4">
                            <p>{post.content}</p>
                        </div>
                    </div>
                    <div className='w-1/4 flex flex-col'>
                        <div className='flex-grow'>
                            {/* Content for first row */}
                        </div>
                        <div className='flex-grow'>
                            {/* Content for second row */}
                        </div>
                        <div className='flex mb-4'>
                            <div className='flex-grow'>
                                Views: {postInfo?.views}
                            </div>
                            <div className='flex-grow'>
                                Likes {post.liked?.length}
                            </div>
                            <div className='flex-grow '>
                                Comments: {postCommentsCount}
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
