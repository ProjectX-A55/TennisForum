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
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const updateForm = prop => e => {

        setForm({
            ...form,
            [prop]: e.target.value
        })

    }

    const register = async () => {

        const user = await getUserByUserName(form.username);
        if (user.exists()) {
            alert("Username already exists");
            return;
        }
        const credentials = await registerUser(form.email, form.password);
        await createUserUserName(form.username, credentials.user.uid, form.email);

        setContext({ user, userData: null });
        navigate("/");
    }

    return (
        <div>
            <h1>Register</h1>
            <label htmlFor="username">User Name: </label><input value={form.username} onChange={updateForm('username')} type="text" name="username" id="username" /><br />
            <label htmlFor="email">Email: </label><input value={form.email} onChange={updateForm('email')} type="text" name="email" id="email" /><br />
            <label htmlFor="password">Password: </label><input value={form.password} onChange={updateForm('password')} type="password" name="password" id="password" /><br />
            <Flex gap="small" wrap="wrap">
                <Button onClick= {register}type="primary">Register</Button>
            </Flex>
        </div>
    )
}


export default Register;