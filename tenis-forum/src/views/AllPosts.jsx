import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import PostInfo from "../components/Post/PostInfo";
import PropTypes from 'prop-types';
import Loading from '../components/Loading/Loading';

/**
 * AllPosts is a functional component that displays all posts.
 * It uses the useState, useEffect hooks from React and useSearchParams, useNavigate hooks from react-router-dom 
 * to manage and update the state and navigate between pages.
 * It also uses the PostInfo component to display individual post information.
 *
 * @component
 * @example
 
 * @param {{postsFromProps: Array}} param0 - An array of posts passed as a prop.
 * @returns {JSX.Element} - A JSX element that displays all posts or a message if no posts are found.
 */
const AllPosts = ({ postsFromProps }) => {

    const [posts, setPosts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortType, setSortType] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate()
    const search = searchParams.get('search') || '';

    const setSearch = (value) => {
        setSearchParams({ search: value });
    };


    useEffect(() => {
        const filteredPosts = postsFromProps.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
        setPosts(filteredPosts);
        if (postsFromProps.length > 0) {
            setIsLoaded(true);
        }
    }, [search, postsFromProps]);

    if (!isLoaded) {
        return <Loading />;
    }

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

    const sortedPosts = sortPosts(posts);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        posts?.length > 0 ? (
            <div className="posts w-full mt-12 mb-5 ">
                <div className="my-nav flex justify-center items-center h-auto mb-10 sm:flex-col md:flex-row">
                    <div className="card w-full sm:w-3/4 flex flex-col sm:flex-row justify-between">
                        <div id="search-home" className="mx-1 sm:mx-2">
                            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-full sm:w-24 md:w-auto" />
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <div id="create-post-home">
                                <div onClick={() => navigate('/posts-create')} role="button" className="btn m-1">Create Post</div>
                            </div>
                            <div id="sort-home">
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
                <div id="all-posts" className="mx-2 sm:mr-0">
                    {currentPosts.map((post) => (
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
                <h1 className="text-2xl">No posts found. Do you want to create one?</h1 >
                <div className="create-post">
                    <button onClick={() => navigate('/posts-create')} role="button" className="btn m-1">Create Post</button>
                </div>
                <button onClick={() => navigate('/posts')} role="button" className="btn m-1">Back</button>
            </div>
        )
    );
};


AllPosts.propTypes = {
    postsFromProps: PropTypes.array
}

export default AllPosts;
