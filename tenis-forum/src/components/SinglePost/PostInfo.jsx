import PropTypes from 'prop-types';
import './PostInfo.css';

import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} props
 * @returns 
 */
const PostInfo = ({ post }) => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-auto">
            <div className="card w-3/4 h-auto bg-base-100 border border-white white-shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title self-start">{post.title}</h2>
                    <p className="self-center">{`${post.content.substring(0, 35)} ...`}</p>
                    <div className="self-start text-sm mt-auto">
                        <p >{`Posted by: ${post.author}`}</p>
                        <p >{`Posted on: ${post.createdOn}`}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary px-2 py-1 text-sm" onClick={() => navigate(`/posts/${post.id}`)}>Full Post</button>
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