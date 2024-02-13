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
        // <header className="header" >
        //     <div style={{display: "inline"}}>
        //         <p>Number of users: {users.length}</p>
        //         {user ? (
        //             <>
        //                 {`Welcome, ${userData?.username}`}
        //                     <button onClick={logout} type="primary">Logout</button>
        //             </>
        //         ) : (
        //             <>
        //                 <NavLink to="/register">Register</NavLink>
        //                 <NavLink to="/login">Login</NavLink>
        //             </>
        //         )}
        //     </div>
        // </header>
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>General</a></li>
                        <li><a>Male</a></li>
                        <li><a>Live Score</a></li>
                    </ul>
                </details>
                <label class="flex cursor-pointer gap-2">
                    <span class="label-text">Current</span>
                    <input type="checkbox" value="synthwave" class="toggle theme-controller" />
                    <span class="label-text">Synthwave</span>
                </label>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                </div>
                {user ? (
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><NavLink to="/register">Register</NavLink></li>
                            <li onClick={logout} role="button">Log Out</li>
                        </ul>
                    </div>
                )
                    :
                    (
                        <div>
                            <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </div>
                    )
                }


            </div >
        </div >
    )
}