import AllPosts from "../../views/AllPosts";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../services/post-service";
import PropTypes from 'prop-types';

/**
 * ManagePosts is a functional component that manages and displays posts.
 * It uses the useState and useEffect hooks from React to manage and update the state.
 * It also uses the getAllPosts function from the post-service to fetch all posts.
 * The AllPosts component is used to display the posts.
 *
 * @component
 * @example

 * @param {{filter: string}} param0 - A string used to filter the posts by topic.
 * @returns {JSX.Element} - A JSX element that displays all posts or a message if no posts are found.
 */
const ManagePosts = ({ filter }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((result) => {
            if (!filter) {
                setPosts(result)
            } else {
                setPosts(result.filter((post) => post.topic === filter
                ))
            }
        })
    }, [filter])


    return (
        <AllPosts postsFromProps={posts} />
    )
}

ManagePosts.propTypes = {
    filter: PropTypes.string
}

export default ManagePosts