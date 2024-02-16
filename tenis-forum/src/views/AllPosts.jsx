import { useEffect, useState } from "react";
import { getAllPosts } from "../services/post-service";
import { useSearchParams } from "react-router-dom";
import PostInfo from "../components/SinglePost/PostInfo";

const AllPosts = ({ postsFromProps}) => {

    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortType, setSortType] = useState('newest');

    const search = searchParams.get('search') || '';

    const setSearch = (value) => {
        setSearchParams({ search: value });
    };

    useEffect(() => {
        setPosts(postsFromProps)
        return (() => setPosts(null))
    }, [postsFromProps.length]) 

    useEffect(() => {
       setPosts(posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())))
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
                return [...posts].sort((a, b) => (b.comments ? Object.values(b.comments).length : 0) - (a.comments ? Object.values(a.comments).length : 0));
            case 'mostViews':
                return [...posts].sort((a, b) => (b.views ? b.views : 0) - (a.views ? a.views : 0));
            default:
                return posts;
        }
    }

    return (
        posts.length > 0 ? (
            <div className="posts w-full mt-7 mb-5">
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
                                    <li><a onClick={() => setSortType('mostViews')}>Most Views</a></li>
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
        ) : (
            <h1 style={{ fontSize: '2em' }}>No posts found</h1 >
        )

    );
};

export default AllPosts;
