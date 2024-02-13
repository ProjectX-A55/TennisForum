import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
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
            console.log(error);
        }
    };

    return (
        <div className="form">
            <div className='form-box'>
                <h1>Login</h1>
                <label htmlFor="email">Email: </label>
                <input value={form.email} onChange={updateForm('email')} type="text" id="email" name="email" />
                <br /><br />
                <label htmlFor="password">Password: </label>
                <input value={form.password} onChange={updateForm('password')} type="password" id="password" name="password" />
                <br /><br />
                    <button onClick={login} type="primary">Login</button>
            </div>
        </div>
    )
}


export default LogIn;