import { NavLink, useNavigate } from "react-router-dom"
import { logoutUser } from "../../services/auth-service"
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";


export function HeaderComponent() {

    const { user, setContext } = useContext(AppContext)
    const { userData } = useContext(AppContext)

    const [avatarUrl, setAvatarUrl] = useState(userData?.avatarUrl);

    const navigate = useNavigate();

    useEffect(() => {
        setAvatarUrl(userData?.avatarUrl);
    }, [userData]);


    const logout = async () => {
        await logoutUser()
        setContext({ user: null, userData: null })
    }

    return (

        <div className="navbar bg-base-100 mb-10 border rounded flex flex-col lg:flex-row justify-between items-center fixed top-0 w-full z-10 shadow shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex-none lg:flex">
                    <div onClick={() => navigate('/')} role="button" className="btn m-1">Home</div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Menu</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/posts-create">{`Create post`}</NavLink></li>
                            <li><NavLink to="/posts">{`All posts`}</NavLink></li>
                            <li><NavLink to="/general-discussions">{`General Discussions`}</NavLink></li>
                            <li><NavLink to="/live-matches">{`Live Matches`}</NavLink></li>
                            <li><NavLink to="/women-s-tennis">{`Women's Tennis`}</NavLink></li>
                            <li><NavLink to="/men-s-tennis">{`Men's Tennis`}</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex-none lg:flex gap-2 mt-4 lg:mt-0">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Avatar" src={avatarUrl} />
                                </div>
                            </div>
                            <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                {userData?.isAdmin && <li><NavLink to="/admin">Admin panel</NavLink></li>}
                                <li><NavLink to="/profile">Profile</NavLink></li>
                                <li onClick={logout} role="button"><NavLink to="/">Log out</NavLink></li>
                            </ul>
                        </div>
                    )
                        :
                        (
                            <div>
                                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                                    <li><NavLink to="/register">Register</NavLink></li>
                                    <div className="divider divider-horizontal"></div>
                                    <li><NavLink to="/login">Log in</NavLink></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}