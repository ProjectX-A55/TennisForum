import PropTypes from 'prop-types';
import './PostInfo.css';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUserName } from '../../services/user-service';


/**
 * 
 * @param {{post: {id: string, title: string, content: string, createdOn: string, liked: array, author: string}, togglePostLike: function}} props
 * @returns 
 */
const PostInfo = ({ post }) => {

    const [author, setAuthor] = useState(null);

    useEffect(() => { getUserByUserName(post.author).then(snapshot => setAuthor(snapshot.val())) }
        , [post])

    const navigate = useNavigate();
    console.log(author);

    return (
        <div className="flex justify-center items-center h-auto mb-4 ">
            <div className="card w-3/4 h-auto bg-base-100 border border-white shadow-lg shadow-white transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="card-normal cursor-pointer flex" onClick={() => navigate(`/posts/${post.id}`)}>
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
                    <div className='w-3/4'>
                        <div className="title ">
                            <h1 className="text-start">{post.title}</h1>
                        </div>
                        <div className="content text-start mt-4">
                            <p>{post.content}</p>
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
