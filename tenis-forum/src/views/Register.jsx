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
        // TODO: Validate inputs
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
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
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
                <div>
                    <button className="btn btn-block" onClick={register} type="primary">Register</button>
                </div>
                <span>Already have an account ?
                        <NavLink to="/login" className="text-blue-600 hover:text-blue-800 hover:underline">Log in</NavLink></span>
            </div>
        </div>
    )
}


export default Register;