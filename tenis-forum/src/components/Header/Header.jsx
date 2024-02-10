import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </header>
    )
}

export default Header