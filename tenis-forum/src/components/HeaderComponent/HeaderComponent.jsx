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

    return (
        <div className="navbar bg-base-100" style={{ border: '1px solid white', marginBottom: '30px' }}>
            <div className="flex-1">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>General</a></li>
                        <li><a>Male</a></li>
                        <li><a>Live Score</a></li>
                    </ul>
                </details>
                <label className="flex cursor-pointer gap-2">
                    <span className="label-text">Current</span>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <span className="label-text">Synthwave</span>
                </label>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
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
                                <li><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}