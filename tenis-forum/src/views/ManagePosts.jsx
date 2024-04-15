import AllPosts from "./AllPosts";
import { useState, useEffect } from "react";
import { getAllPosts } from "../services/post-service";
import PropTypes from 'prop-types';

/**
 * 
 * @param {{filter: string}} param0 
 * @returns 
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