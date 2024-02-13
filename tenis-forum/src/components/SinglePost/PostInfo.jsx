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
    //TODO: trqbva da  se poqvi prysche kogato usera e lognat i da moje da likeva postove

    return (
        <div className="flex justify-center items-center h-auto mb-4">
            <div className="card w-3/4 h-auto bg-base-100 border border-white white-shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="card-body">
                    <div className="mb-4 w-full">
                        <h2 onClick={() => navigate(`/posts/${post.id}`)} className="card-title self-start">{post.title}</h2>
                        <p className="self-center">{`${post.content.substring(0, 35)} ...`}</p>
                        <p >{`Posted by: ${post.author}`}</p>
                        <p >{`Posted on: ${post.createdOn}`}</p>
                        <div className="avatar">
                            <div className="w-20 rounded">
                                <img src={author?.avatar} alt="" />
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary px-2 py-1 text-sm" onClick={() => navigate(`/posts/${post.id}`)}>Full Post</button>
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