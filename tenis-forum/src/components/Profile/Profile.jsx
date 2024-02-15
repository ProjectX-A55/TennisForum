import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { updateUser } from "../../services/user-service";
// import ChangePasswordForm from "../Comments/ChangePassword/ChangePassword";
// import Authenticated from "../../hoc/Authenticated";
import ProfilePhotoUpload from "../ProfilePhotoUpload/ProfilePhotoUpload";

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
                <div className="relative w-full flex flex-col justify-center">
                    
                    <form onSubmit={handleSubmit} className="w-full p-6 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                        
                        <div className="mb-4">
                            <label className="block mb-2">Edit First Name:</label>
                            <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input input-bordered" />
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label className="block mb-2">Edit Last Name:</label>
                            <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full input input-bordered" />
                            </div>
                        </div>
                        <ProfilePhotoUpload></ProfilePhotoUpload>
                        {/* <ChangePasswordForm><Authenticated></Authenticated></ChangePasswordForm> */}

                        <button type="submit" className="btn btn-primary w-full">Save</button>

                    </form>
                </div>


            ) : (
                <div className="relative w-full flex flex-col justify-center">
                    <div className="w-full p-6 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                        <div className="flex justify-center"><img src={formData.avatar} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-md m-4" alt="User Avatar" /></div>

                        <div className="p-4 lg:p-6">
                            
                            <div className="mb-4">
                                <label className="block mb-2">Username:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="w-full input input-bordered" />
                                </div>
                            </div>


                            <div className="mb-4">
                                <label className="block mb-2">Email:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                    <input type="text" name="email" value={formData.email} onChange={handleInputChange} className="w-full input input-bordered" /> 
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2">First Name:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input input-bordered" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2">Last Name:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full input input-bordered" />
                                </div>
                            </div>

                            <button className="btn btn-primary w-full" onClick={() => setIsEditing(true)}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};


export default Profile;