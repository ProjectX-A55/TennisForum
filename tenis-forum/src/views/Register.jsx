import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { createUserUserName, getUserByUserName } from "../services/user-service";
import { registerUser } from "../services/auth-service";
import { Button, Flex } from 'antd';

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
        <div>
            <h1>Register</h1>
            <label htmlFor="username">User Name: </label><input value={form.username} onChange={updateForm('username')} type="text" name="username" id="username" /><br />
            <label htmlFor="firstName">First Name: </label><input value={form.firstName} onChange={updateForm('firstName')} type="text" name="firstName" id="firstName" /><br />
            <label htmlFor="lastName">Last Name: </label><input value={form.lastName} onChange={updateForm('lastName')} type="text" name="lastName" id="lastName" /><br />
            <label htmlFor="email">Email: </label><input value={form.email} onChange={updateForm('email')} type="text" name="email" id="email" /><br />
            <label htmlFor="password">Password: </label><input value={form.password} onChange={updateForm('password')} type="password" name="password" id="password" /><br />
            <Flex gap="small" wrap="wrap">
                <Button onClick={register} type="primary">Register</Button>
            </Flex>
        </div>
    )
}


export default Register;