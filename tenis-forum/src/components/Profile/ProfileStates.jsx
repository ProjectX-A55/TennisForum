import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import UserProfile from "./UserProfile";
import UserComments from "./UserComments";
import UserPosts from "./UserPosts";

/**
 * Profile component for the application.
 *
 * This component displays the user's profile, their posts, and their comments. It uses the AppContext to get the user's data and a state variable to determine which component to display (UserProfile, UserPosts, or UserComments). The state variable is updated when the user clicks on the corresponding link in the sidebar.
 *
 * @component
 * @example
* @returns {JSX.Element} - A JSX element representing the user profile.
 */
const ProfileStates = () => {

    const { userData, setContext } = useContext(AppContext)
    const [state, setState] = useState('profile')

    const componentsMap = {
        'profile': <UserProfile userData={userData} setContext={setContext} />,
        'my-posts': <UserPosts userData={userData} />,
        'my-comments': <UserComments userData={userData} />
    }

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-10">
            <aside className="sm:m-0 mb-5 mt-12 mr-2 ml-2">
                <div className="w-full lg:w-56">
                    <ul className="menu w-full lg:w-56 rounded-box border border-amber-950 shadow-2xl">
                        <li onClick={() => setState('profile')}><a>Profile</a></li>
                        <li onClick={() => setState('my-posts')}><a>My Posts</a></li>
                        <li onClick={() => setState('my-comments')}><a>My Comments</a></li>
                    </ul>
                </div>
            </aside>
            <div className="w-full sm:m-0 ml-2 mr-2">
                {componentsMap[state]}
            </div>
        </div>
    );

};

export default ProfileStates;
