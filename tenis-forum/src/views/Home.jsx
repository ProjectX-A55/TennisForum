import { useState, useEffect } from "react";
import { getAllUsers } from "../services/user-service";
import { getAllPosts } from "../services/post-service";
import PostInfo from "../components/SinglePost/PostInfo";
import { getAllComments } from "../services/comment-service";
import { formatDate } from "../services/date-format";

const Home = () => {

    const [posts, setPosts] = useState([])
    const [usersNumber, setUsersNumber] = useState(0);
    const [sortType, setSortType] = useState('mostViews');
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        getAllPosts().then(setPosts)
    }, [])

    useEffect(() => {
        getAllComments().then(setAllComments)
    }, [])

    useEffect(() => {
        getAllUsers().then((snapshot) => {
            setUsersNumber(Object.keys(snapshot.val()).length);
        });
    }, []);

    const sortPosts = (posts) => {
        let sortedPosts;
        switch (sortType) {
            case 'mostCommented':
                sortedPosts = [...posts].sort((a, b) => (b.comments ? Object.values(b.comments).length : 0) - (a.comments ? Object.values(a.comments).length : 0));
                break;
            case 'mostViews':
                sortedPosts = [...posts].sort((a, b) => (b.views ? b.views : 0) - (a.views ? a.views : 0));
                break;
            default:
                sortedPosts = [...posts];
                break;
        }
        return sortedPosts.slice(0, 10);
    }

    return (
        <div className="posts w-auto w-full  mb-5 justify-center">
            <div className="stats shadow shadow-2xl flex mb-10 w-2/4 mx-auto border border-amber-950">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Posts</div>
                    <div className="stat-value">{posts.length}</div>
                    <div className="stat-desc">{`Feb/08/2024 - ${formatDate(new Date())}`}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">All comments</div>
                    <div className="stat-value">{allComments}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{usersNumber}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
            <div className="all-posts">
                <div className="flex mb-5 w-3/4 mx-auto">
                    <div onClick={() => setSortType('mostViews')} className="cursor-pointer grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">TOP 10 MOST POPULAR</div>
                    <div className="divider divider-horizontal">OR</div>
                    <div onClick={() => setSortType('mostCommented')} className="cursor-pointer grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">TOP 10 MOST COMMENTED</div>
                </div>
                {sortPosts(posts).map((post) => (
                    <PostInfo key={post.id} post={post} />
                ))}
            </div>

        </div>

    );
};


export default Home;