import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPostById } from "../services/post-service";
import PostInfo from "../components/SinglePost/PostInfo";

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