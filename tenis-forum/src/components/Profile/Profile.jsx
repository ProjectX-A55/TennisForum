import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { updateUser } from "../../services/user-service";


const Profile = () => {

    const { userData } = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(userData)



    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        if (isEditing) {
            try {
                event.preventDefault();
                await updateUser(userData.username, formData);
            } catch (error) {
                console.error('Failed to update user:', error);
            }
        }

        setIsEditing(false);

    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Save</button>
                </form>
            ) : (
                // <div>
                //     <p>{formData.username}</p>
                //     <p>First Name: {formData.firstName}</p>
                //     <p>Last Name: {formData.lastName}</p>
                //     <p>Email: {formData.email}</p>
                //     <p>Avatar: <img src={formData.avatar} alt="User avatar" style={{ width: '100px' }} /></p>
                //     <button onClick={() => setIsEditing(true)}>Edit User</button>

                // </div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={formData.avatar} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <p>{formData.email}</p>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Profile;