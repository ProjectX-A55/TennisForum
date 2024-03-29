import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import PostInfo from "../components/SinglePost/PostInfo";

const AllPosts = ({ postsFromProps }) => {

    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortType, setSortType] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const navigate = useNavigate()

    const search = searchParams.get('search') || '';

    const setSearch = (value) => {
        setSearchParams({ search: value });
    };

    useEffect(() => {
        setPosts(postsFromProps)
        return (() => setPosts(null))
    }, [postsFromProps])

    useEffect(() => {
        const filteredPosts = postsFromProps.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
        setPosts(filteredPosts);
    }, [search, postsFromProps])

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


    
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                        <div className="flex">
                            <div className="create-post">
                                <div onClick={() => navigate('/posts-create')} role="button" className="btn m-1">Create Post</div>
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
                </div>
                <div className="all-posts">
                    {sortPosts(currentPosts).map((post) => (
                        <PostInfo key={post.id} post={post} togglePostLike={togglePostLike} />
                    ))}
                </div>
                <div className="justify-center flex">
                    {currentPage > 1 && <button className="join-item btn btn-outline mr-1" onClick={() => paginate(currentPage - 1)}>Previous</button>}
                    {pageNumbers.map(number => (
                        <button key={number} className={`join-item btn mr-1 ${number === currentPage ? 'btn-primary' : ''}`} onClick={() => paginate(number)}>{number}</button>
                    ))}
                    {currentPage < totalPages && <button className="join-item btn btn-outline" onClick={() => paginate(currentPage + 1)}>Next</button>}
                </div>
            </div>
        ) : (
            <div>
                <h1 style={{ fontSize: '2em' }}>No posts found. Do you want to create one? We have cookies.</h1 >
                <div className="create-post">
                    <div onClick={() => navigate('/posts-create')} role="button" className="btn m-1">Create Post</div>
                </div>
                <div onClick={() => navigate('/posts')} role="button" className="btn m-1">Back</div>
            </div>
        )
    );
};

export default AllPosts;
