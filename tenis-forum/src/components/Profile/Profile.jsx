import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

import UserProfile from "./UserProfile";
import UserComments from "./UserComments";
import UserPosts from "./UserPosts";

const Profile = () => {

    const { userData, setContext } = useContext(AppContext)
    const [state, setState] = useState('profile')

    const componentsMap = {
        'profile': <UserProfile userData={userData} setContext={setContext} />,
        'my-posts': <UserPosts userData={userData} />,
        'my-comments': <UserComments userData={userData} />
    }

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-10">
            <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:w-1/6 ml-5 mb-5 lg:mb-0">
                <div className="w-full lg:w-56">
                    <ul className="menu w-full lg:w-56 rounded-box border border-amber-950 shadow-2xl">
                        <li onClick={() => setState('profile')}><a>Profile</a></li>
                        <li onClick={() => setState('my-posts')}><a>My Posts</a></li>
                        <li onClick={() => setState('my-comments')}><a>My Comments</a></li>
                    </ul>
                </div>
            </aside>
            <div className="w-full lg:ml-0">
                {componentsMap[state]}
            </div>
        </div>
    );

};

export default Profile;
