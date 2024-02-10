import { NavLink } from "react-router-dom"
import "./HeaderComponent.css"

export function HeaderComponent() {
    return (
        <header className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </header>
    )
}