import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"
import { useContext } from "react"
import AppContext from "../../context/AppContext"
import { logoutUser } from "../../services/auth-service"
import { Button, Flex } from 'antd';


export function HeaderComponent() {

    const { user, userData, setContext } = useContext(AppContext)

    const logout = async () => {
        await logoutUser()
        setContext({ user: null, userData: null })
    }

    return (
        <header className="header">
            <NavLink to="/">Home</NavLink>
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
        </header>
    )
}