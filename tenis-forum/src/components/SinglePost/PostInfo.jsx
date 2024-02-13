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
                <div className="card-body cursor-pointer" onClick={() => navigate(`/posts/${post.id}`)}>
                    <div className="title ">
                        <h2 className="text-center">{post.title}</h2>
                    </div>
                    <div className="content">
                        <p>Random text to test</p>
                    </div>
                    <div className="w-24 rounded text-center">
                        <img src={author?.avatar} alt="" />
                        <div className='user-info'>
                            <p >{`Posted by: ${post.author}`}</p>
                            <p >{`Posted on: ${post.createdOn}`}</p>
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


{/* <h2 className="card-title self-start">{post.title}</h2>
                        <p className="self-center">{`${post.content.substring(0, 35)} ...`}</p>
                        <p >{`Posted by: ${post.author}`}</p>
                        <p >{`Posted on: ${post.createdOn}`}</p> */}