import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/post-service';
import { NavLink } from 'react-router-dom';

/**
 * UserComments component for the application.
 *
 * This component displays all the comments made by the user. It fetches all posts and filters out the ones where the user has made a comment. 
 * It then maps over these posts and creates an array of comments made by the user. 
 * These comments are displayed in a table with columns for the comment number, creation date, content, and a link to the post the comment was made on.
 *
 * @component
 * @param {{
* userData: {username: string, email: string, firstName: string, lastName: string, avatarUrl: string}, }} userData
* @example
* @returns {JSX.Element} - A JSX element representing all of the user comments.
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
            <div className="border border-amber-950 shadow-2xl sm:rounded-xl rounded-xl w-full mr-5 sm:m-0">
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
                                    <tr key={index}>
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
