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
                // <form onSubmit={handleSubmit}>
                //     <label>
                //         First Name:
                //         <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                //     </label>
                //     <label>
                //         Last Name:
                //         <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                //     </label>
                //     <button type="submit">Save</button>
                // </form>
                <div className="max-w-md mx-auto bg-gray-200 text-black rounded-lg shadow-md overflow-hidden mb-8 lg:max-w-md lg:flex lg:items-center lg:justify-center m-4">
                <form onSubmit={handleSubmit} className="max-w-xs mx-auto bg-white text-black rounded-lg shadow-md overflow-hidden mb-8 lg:max-w-md lg:flex lg:items-center lg:justify-center m-4 p-4">
                    <div className="mb-4">
                        <label className="block mb-2">
                            Edit First Name:
                        </label>
                        <div className="bg-white px-4 py-2 rounded-md shadow-md">
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="block w-full px-2 py-1 bg-white border border-gray-300 focus:outline-none focus:border-gray-500" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">
                            Edit Last Name:
                        </label>
                        <div className="bg-white px-4 py-2 rounded-md shadow-md">
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="block w-full px-2 py-1 bg-white border border-gray-300 focus:outline-none focus:border-gray-500" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-1/4">Save</button>
                </form>
                    </div>


            ) : (
                // <div>
                //     <p>{formData.username}</p>
                //     <p>First Name: {formData.firstName}</p>
                //     <p>Last Name: {formData.lastName}</p>
                //     <p>Email: {formData.email}</p>
                //     <p>Avatar: <img src={formData.avatar} alt="User avatar" style={{ width: '100px' }} /></p>
                //     <button onClick={() => setIsEditing(true)}>Edit User</button>

                // </div>

<div className="relative w-full flex flex-col justify-center ">
            <div className="w-full p-6 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                        <div className="flex justify-center"><img src={formData.avatar} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-md m-4" alt="User Avatar" /></div>
                        <div className="p-4 lg:p-6">
                            <div className="mb-4">
                                <label className="block mb-2">Username:</label>
                                <div className="w-full p-2 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="block w-full px-2 py-1 bg-gray border border-gray-300 focus:outline-none focus:border-gray-500" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">First Name:</label>
                                <div className="bg-white px-4 py-2 rounded-md shadow-md">
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="block w-full px-2 py-1 bg-white border border-gray-300 focus:outline-none focus:border-gray-500" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Last Name:</label>
                                <div className="bg-white px-4 py-2 rounded-md shadow-md">
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="block w-full px-2 py-1 bg-white border border-gray-300 focus:outline-none focus:border-gray-500" />
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