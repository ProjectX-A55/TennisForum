import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"
import { logoutUser } from "../../services/auth-service"
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { getAllUsers } from "../../services/user-service";



export function HeaderComponent() {

    const { user, userData, setContext } = useContext(AppContext)

    const [users, setUsers] = useState([])

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

    const toProfile = () => {
        <NavLink to="/profile">Profile</NavLink>
    }

    return (
        <div className="navbar bg-base-100 mb-10 shadow-lg shadow-white border rounded">
            <div className="flex-1">

                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Menu</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/posts-create">Create post</NavLink></li>
                        <li><NavLink to="/posts">All post</NavLink></li>
                        <li>Men Tenis</li>
                    </ul>
                </div>
            </div>

            <div className="flex-none gap-2">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><NavLink to="/profile">Profile</NavLink></li>
                            <li onClick={logout} role="button">Log Out</li>
                        </ul>
                    </div>
                )
                    :
                    (
                        <div>
                            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                                <li><NavLink to="/register">Register</NavLink></li>
                                <div className="divider divider-horizontal"></div>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}