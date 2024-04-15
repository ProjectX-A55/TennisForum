import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../services/auth-service";

const LogIn = () => {
    const { user, setContext } = useContext(AppContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const location = useLocation();

    const updateForm = prop => e => {
        setForm({ ...form, [prop]: e.target.value });
    };

    useEffect(() => {
        if (user) {
            navigate(location.state?.from.pathname || '/');
        }
    }, [user, location.state?.from.pathname, navigate]);

    const login = async () => {

        try {
            const credentials = await loginUser(form.email, form.password);
            setContext({ user: credentials.user, userData: null });
        } catch (error) {
            alert('Wrong username or password')
        }
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{`Log in`}</h1>
                    <p className="py-6">{`You need to be logged in to view this topic. Log in or create a new account now.`}</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100  border border-amber-950 shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label htmlFor="email">Email: </label>
                            <input className="input input-bordered"
                                value={form.email} onChange={updateForm('email')}
                                type="text" placeholder="email"
                                name="email" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password: </label>
                            <input className="input input-bordered"
                                value={form.password} onChange={updateForm('password')}
                                type="password" placeholder="password"
                                name="password" />
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary" onClick={login}>{`Log in`}</button>
                        </div>
                        <div>
                            <span className="mr-2">{`Don't have an account?`}</span>
                            <NavLink to="/register" className="text-blue-600 hover:text-blue-800 hover:underline">Register</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LogIn;