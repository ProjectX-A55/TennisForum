import { useEffect, useState } from "react";
import { getAllPosts } from "../services/post-service";
import { useSearchParams } from "react-router-dom";
import PostInfo from "../components/SinglePost/PostInfo";

const AllPosts = () => {

    const [posts, setPosts] = useState([])
    const [serachParams, setSearchParams] = useSearchParams();

    const search = serachParams.get('search') || '';

    const setSearch = (value) => {
        setSearchParams({ search: value });
    };

    useEffect(() => {
        getAllPosts(search).then(setPosts)
    }, [search])

    const togglePostLike = (username, id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                post.liked = post.liked.includes(username) ? post.liked.filter(u => u !== username) : [...post.liked, username];
            }
            return post;
        }
        ))
    }

    return (
        
        <div className="hero w-auto w-full flex flex-col">
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
            <div className="w-auto w-full mt-7 mb-5">
                {posts.map((post) => (
                    <PostInfo key={post.id} post={post} togglePostLike={togglePostLike} />
                ))}
            </div>
        </div>
    );


};



export default AllPosts;