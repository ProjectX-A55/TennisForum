import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { updateUser } from "../../services/user-service";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase-config";

const Profile = () => {

    const { userData, setContext } = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(userData)
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        debugger
        event.preventDefault();

        if (isEditing) {
            
            if (formData.firstName.length < 4 || formData.firstName.length > 32) {
                alert('First name must be between 4 and 32 characters.');
                return;
            }

            if (formData.lastName.length < 4 || formData.lastName.length > 32) {
                alert('Last name must be between 4 and 32 characters.');
                return;
            }

            try {
                let avatarUrl = userData.avatarUrl;
                if (file) {
                    const storageReference = storageRef(storage, `avatars/${userData.username}`);
                    await uploadBytes(storageReference, file);
                    avatarUrl = await getDownloadURL(storageReference);
                }

                const updatedUserData = {
                    ...formData,
                    avatarUrl
                };

                await updateUser(userData.username, updatedUserData);

                setContext(prevContext => ({
                    ...prevContext,
                    userData: updatedUserData
                }));
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
                    <form onSubmit={handleSubmit} className="w-full p-6 m-auto bg-gray rounded-lg shadow-2xl ring-2 ring-white lg:max-w-xl border border-amber-950">
                        <div className="flex justify-center">
                            <img src={userData.avatarUrl} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg m-4" alt="User Avatar" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Edit Avatar:</label>
                            <input type="file" onChange={handleFileChange} className="file-input w-full max-w-xs" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Edit First Name:</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input input-bordered" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Edit Last Name:</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full input input-bordered" />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Save</button>
                    </form>
                </div>
            ) : (
                <div className="relative w-full flex flex-col justify-center border">
                    <div className="w-full p-6 m-auto bg-gray rounded-lg border border-amber-950 shadow-2xl ring-2 ring-white lg:max-w-xl">
                        <div className="flex justify-center">
                            <img src={userData.avatarUrl} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg m-4" alt="User Avatar" />
                        </div>
                        <div className="p-4 lg:p-6">
                            <div className="mb-4 " >
                                <label className="block mb-2">Username:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
                                    {userData.username}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Email:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
                                    {userData.email}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">First Name:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
                                    {userData?.firstName}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Last Name:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
                                    {userData?.lastName}
                                </div>
                            </div>
                            <button className="btn btn-primary w-full mt-7" onClick={() => setIsEditing(true)}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Profile;