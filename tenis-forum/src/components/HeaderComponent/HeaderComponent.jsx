import { NavLink, useNavigate } from "react-router-dom"
import { logoutUser } from "../../services/auth-service"
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { getAllUsers } from "../../services/user-service";

export function HeaderComponent() {

    const { user, setContext } = useContext(AppContext)
    const { userData } = useContext(AppContext)
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const fetchUsers = async () => {
            const usersSnapshot = await getAllUsers();
            const users = usersSnapshot.val();
            setUsers(users ? Object.values(users) : []);
        };

        fetchUsers();
    }, []);


    const logout = async () => {
        await logoutUser()
        setContext({ user: null, userData: null })
    }

    return (
        <div className="navbar bg-base-100 mb-10 border rounded flex justify-between items-center fixed top-0 w-full z-10">
            
            <div className="flex-none">
                
            <div onClick={() => navigate('/')} role="button" className="btn m-1">Home</div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Menu</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/posts-create">Create post</NavLink></li>
                        <li><NavLink to="/posts">All post</NavLink></li>
                        <li><NavLink to="/general-discussions">General Discussions</NavLink></li>
                        <li><NavLink to="/live-matches">Live Matches</NavLink></li>
                        <li><NavLink to="/women-s-tennis">Women's Tennis</NavLink></li>
                        <li><NavLink to="/men-s-tennis">Men's Tennis</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="flex-none text-center font-bold text-5xl pb-10" style={{ color: '#8e4162' }}>Project-X Tennis Forum</div>

            <div className="flex-none gap-2">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={userData?.avatarURL} />
                            </div>
                        </div>
                        <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
    )
}