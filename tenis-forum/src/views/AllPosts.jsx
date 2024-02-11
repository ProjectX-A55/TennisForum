import { useEffect, useState } from "react";
import { getAllPosts } from "../services/post-service";
import { useSearchParams } from "react-router-dom";
import Post from "../components/SinglePost/Post";

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

    return (
        <div>
            <h1>All Posts</h1>
            <label htmlFor="search">Search</label>
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" name="search" id="search" /> <br />
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};


export default AllPosts;