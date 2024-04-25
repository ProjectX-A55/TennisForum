import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/post-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

/**
 * UserPosts component for the application.
 *
 * This component displays all the posts made by the user. It fetches all posts and filters out the ones authored by the user. These posts are displayed in a table with columns for the post number, creation date, title, stats (views, likes, comments), and a link to view the post.
 *
 * @param {{
 * userData: {username: string, email: string, firstName: string, lastName: string, avatarUrl: string}, }} userData
 * @example
* @returns {JSX.Element} - A JSX element representing all of the user posts.
*/
const UserPosts = ({ userData }) => {

    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(posts => {
            const userPosts = posts.filter(post => post.author === userData.username)
            setUserPosts(userPosts)
        })
    }, [userData])

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="border border-amber-950 shadow-2xl sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5 rounded-xl">
                <div className=" py-6 px-4 sm:p-6 flex flex-col lg:flex-col">
                    <div className="overflow-x-auto">
                        <table className="table min-w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Created on</th>
                                    <th>Title</th>
                                    <th>Stats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userPosts.length > 0 ? (userPosts.map((post, index) => (
                                    <tr key={post.id}>
                                        <th>{index + 1}</th>
                                        <td>{post.createdOn}</td>
                                        <td>{post.title}</td>
                                        <td>{<div className='flex mb-1 justify-between'>
                                            <div className='views flex flex-row'>
                                                <span className='mr-2'>{post?.views}</span>
                                                <div>
                                                    <FontAwesomeIcon icon={faEye} />
                                                </div>
                                            </div>
                                            <div className='views flex flex-row'>
                                                <span className='mr-2'>{post?.liked?.length || 0}</span>
                                                <div>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                            <div className='views flex flex-row'>
                                                <span className='mr-2'>{Object.keys(post?.comments || {}).length}</span>
                                                <div>
                                                    <FontAwesomeIcon icon={faComment} />
                                                </div>
                                            </div>
                                        </div>}</td>
                                        <td><NavLink to={`/posts/${post.id}`}>View post</NavLink></td>
                                    </tr>
                                )))
                                    :
                                    (
                                        <tr>
                                            <td colSpan={5} className='font-semibold mt-3'>No posts to display.</td>
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


UserPosts.propTypes = {
    userData: PropTypes.object,
}
export default UserPosts;
