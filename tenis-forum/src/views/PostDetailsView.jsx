import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPostById } from "../services/post-service";
import PostDetails from "../components/Post/PostDetails";

/**
 * PostDetailsView is a functional component that displays the details of a post.
 * It uses the useParams hook from react-router-dom to get the id of the post from the URL.
 * It also uses the useState and useEffect hooks from React to manage and update the state.
 * The getPostById function from the post-service is used to fetch the post by its id.
 * The PostDetails component is used to display the post details.
 *
 * @component
 * @example
 * @returns {JSX.Element} - A JSX element that displays the details of a post or null if the post is not found.
 */

const PostDetailsView = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        getPostById(id).then(setPost)
    }, [id])

    const togglePostLike = (username) => {
        setPost({
            ...post,
            liked: post.liked.includes(username) ? post.liked.filter(u => u !== username) : [...post.liked, username],
        });
    };

    return (
        <>
            {post && <PostDetails post={post} togglePostLike={togglePostLike} />}
        </>
    );
};


export default PostDetailsView;