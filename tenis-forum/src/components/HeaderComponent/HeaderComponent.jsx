import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"
import { logoutUser } from "../../services/auth-service"
import { Button, Flex } from 'antd';
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { getAllUsers } from "../../services/user-service";
import { Logo } from "../Logo";


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
        <header className="header" >
            <Logo />
            <div style={{display: "inline"}}>
                <p>Number of users: {users.length}</p>
                {user ? (
                    <>
                        {`Welcome, ${userData?.username}`}
                        <Flex>
                            <Button onClick={logout} type="primary">Logout</Button>
                        </Flex>
                    </>
                ) : (
                    <>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </>
                )}
            </div>
        </header>
    )
}