import { useState, useEffect } from "react";
import { getAllUsers } from "../services/user-service";
import { getAllPosts } from "../services/post-service";
import PostInfo from "../components/SinglePost/PostInfo";

const Home = () => {

    const [posts, setPosts] = useState([])
    const [usersNumber, setUsersNumber] = useState(0);
    const [sortType, setSortType] = useState('newest');

    useEffect(() => {
        getAllPosts().then(setPosts)
    }, [])


    useEffect(() => {
        getAllUsers().then((snapshot) => {
            setUsersNumber(Object.keys(snapshot.val()).length);
        });
    }, []);


    const sortPosts = (posts) => {
        switch (sortType) {
            case 'mostCommented':
                return [...posts].sort((a, b) => (b.comments ? Object.values(b.comments).length : 0) - (a.comments ? Object.values(a.comments).length : 0));
            case 'mostViews':
                return [...posts].sort((a, b) => (b.views ? b.views : 0) - (a.views ? a.views : 0));
            default:
                return posts.slice(0, 10);
        }
    }

    return (

        <div className="posts w-auto w-full mt-7 mb-5 justify-center">
            <h1 className="text-3xl font-bold underline">
                {usersNumber} users are registered in the forum
            </h1>

            <div className="all-posts  ">
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