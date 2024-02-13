import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Profile = () => {

    const { userData } = useContext(AppContext)
    console.log(userData)
    return (
        <div>
            <p>{userData.username}</p>
            <p>{userData.email}</p>
            <p>{userData.firstName}</p>
            <p>{userData.lastName}</p>
        </div>
    )
};


export default Profile;