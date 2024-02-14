import { useEffect, useState } from "react";
import { getAllPosts } from "../services/post-service";
import { useSearchParams } from "react-router-dom";
import PostInfo from "../components/SinglePost/PostInfo";

const AllPosts = () => {

    const [posts, setPosts] = useState([])
    const [serachParams, setSearchParams] = useSearchParams();
    const [sortType, setSortType] = useState('newest');

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

    const sortPosts = (posts) => {
        switch (sortType) {
            case 'newest':
                return [...posts].sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));
            case 'oldest':
                return [...posts].sort((a, b) => new Date(a.createdOn) - new Date(b.createdOn));
            case 'mostLiked':
                return [...posts].sort((a, b) => b.liked.length - a.liked.length);
            case 'mostCommented':
                return [...posts].sort((a, b) => (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0));
            default:
                return posts;
        }
    }
    console.log(posts)
    return (
        <div className="posts w-auto w-full mt-7 mb-5">
            <div className="my-nav flex justify-center items-center h-auto mb-4 ">
                <div className="card w-3/4 flex flex-row justify-between">
                    <div className="search">
                        <div className="form-control">
                            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                    </div>
                    <div className="sort">
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={() => setSortType('newest')}>Newest</a></li>
                                <li><a onClick={() => setSortType('oldest')}>Oldest</a></li>
                                <li><a onClick={() => setSortType('mostLiked')}>Most Liked</a></li>
                                <li><a onClick={() => setSortType('mostCommented')}>Most Commented</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-posts">
                {sortPosts(posts).map((post) => (
                    <PostInfo key={post.id} post={post} togglePostLike={togglePostLike} />
                ))}
            </div>
        </div>
    );
};



export default AllPosts;