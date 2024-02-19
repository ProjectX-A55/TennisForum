import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserUserName, getUserByUserName } from "../services/user-service";
import { registerUser } from "../services/auth-service";


const Register = () => {

    const { setContext } = useContext(AppContext)

    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const updateForm = prop => e => {
        setForm({ ...form, [prop]: e.target.value });
    }

    const register = async () => {

        if (form.username.length < 4 || form.username.length > 42) {
            alert("Username must be between 4 and 42 characters long.");
            return;
        }

        if (form.firstName.length < 4 || form.firstName.length > 32) {
            alert("Username must be between 4 and 42 characters long.");
            return;
        }

        if (form.lastName.length < 4 || form.lastName.length > 32) {
            alert("Username must be between 4 and 42 characters long.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email.");
            return;
        }
        //TODO: Add password validation
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
        // if (!passwordRegex.test(form.password)) {
        //     alert("Password must be at least 8 characters long, contain at least one letter, one number and one special character.");
        //     return;
        // }

        try {
            const user = await getUserByUserName(form.username);
            if (user.exists()) {
                alert("User name already in existence. Please choose another one.");
                return
            }
            const credentials = await registerUser(form.email, form.password);
            await createUserUserName(form.username, form.firstName, form.lastName, credentials.user.uid, form.email);

            setContext({ user, userData: null });
            navigate('/');
        }
        catch (error) {
            if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                alert("Email already in use")
            }
        }
    }

    return (
        <div className="relative w-full flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-gray border border-amber-950 rounded-md shadow-2xl shad ring-2 ring-white lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Sign Up</h1>
                <div>
                    <label htmlFor="username">User Name: </label>
                    <input className="w-full input input-bordered" value={form.username} onChange={updateForm('username')} type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input className="w-full input input-bordered" value={form.firstName} onChange={updateForm('firstName')} type="text" name="firstName" id="firstName" /><br />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input className="w-full input input-bordered" value={form.lastName} onChange={updateForm('lastName')} type="text" name="lastName" id="lastName" /><br />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input className="w-full input input-bordered" value={form.email} onChange={updateForm('email')} type="text" name="email" id="email" /><br />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input className="w-full input input-bordered" value={form.password} onChange={updateForm('password')} type="password" name="password" id="password" />
                </div>
                <br />
                <div >
                    <button className="btn btn-ghost btn-circle avatar bg-base-200 w-full" onClick={register} type="primary">Register</button>
                </div>
                <br />
                <span>Already have an account?
                    <NavLink to="/login" className="text-blue-600 hover:text-blue-800 hover:underline">Log in</NavLink></span>
            </div>
        </div>
    )
}


export default Register;