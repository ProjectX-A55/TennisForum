import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/post-service';
import { NavLink } from 'react-router-dom';

/**
 * @param {{
* userData: {username: string, email: string, firstName: string, lastName: string, avatarUrl: string}, }} userData
* 
*/
const UserComments = ({ userData }) => {


    const [myComments, setMyComments] = useState([])

    useEffect(() => {
        getAllPosts().then((posts) => {
            const postsWithUserComments = posts.filter(post => post.comments && Object.keys(post.comments).some(key => post.comments[key].author === userData.username))
            const userComments = postsWithUserComments.flatMap(post =>
                Object.values(post.comments || {}).filter(comment => comment.author === userData.username)
                    .map(comment => ({
                        ...comment,
                        postId: post.id,
                        createdOn: new Date(comment.createdOn).toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
                    }))
            );
            setMyComments(userComments)
        })

    }, [userData])

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="border border-amber-950 shadow-2xl sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5">
                <div className=" py-6 px-4 sm:p-6 flex flex-col lg:flex-col">
                    <div className="overflow-x-auto">
                        <table className="table min-w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Created on</th>
                                    <th>Content</th>
                                    <th>Stats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myComments.length > 0 ? (myComments.map((comment, index) => (
                                    <tr key={comment.id}>
                                        <th>{index + 1}</th>
                                        <td>{comment.createdOn}</td>
                                        <td >{comment.content}</td>
                                        <td><NavLink to={`/posts/${comment.postId}`}>View post</NavLink></td>
                                    </tr>
                                )))
                                    :
                                    (
                                        <tr>
                                            <td colSpan={5} className='font-semibold mt-3'>No comments to display.</td>
                                        </tr>

                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

UserComments.propTypes = {
    userData: PropTypes.object,
}

export default UserComments;
