import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPostById } from "../services/post-service";
import PostInfo from "../components/SinglePost/PostInfo";

/**
 * PostInfoView is a functional component that displays the details of a post.
 * It uses the useParams hook from react-router-dom to get the id of the post from the URL.
 * It also uses the useState and useEffect hooks from React to manage and update the state.
 * The getPostById function from the post-service is used to fetch the post by its id.
 * The PostInfo component is used to display the post details.
 * The togglePostLike function is used to toggle the like status of the post.
 *
 * @component
 * @example
 * @returns {JSX.Element} - A JSX element that displays the details of a post or null if the post is not found.
 */
const PostInfoView = () => {
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
        <div>
            {post && <PostInfo post={post} togglePostLike={togglePostLike}/>}
        </div>
    );
};

export default PostInfoView;
