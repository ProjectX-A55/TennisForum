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
                <form className="max-w-xs mx-auto bg-white text-black rounded-lg shadow-md overflow-hidden mb-8 lg:max-w-md lg:flex lg:items-center lg:justify-center m-4 p-4">
                    <div className="mb-4">
                        <label className="block mb-2">
                            First Name:
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="block w-full mt-1 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-gray-500 bg-white" />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">
                            Last Name:
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="block w-full mt-1 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-gray-500 bg-white" />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2 bg-gray-700 hover:bg-gray-900 text-white px-2 py-1.5 rounded">Save</button>
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
                <div className="hero bg-base-200">
                    <div className="hero-content">
                        <div className="max-w-xs mx-auto bg-gray-200 text-black rounded-lg shadow-md overflow-hidden mb-8 lg:max-w-md lg:flex lg:items-center lg:justify-center m-4">
                            <img src={formData.avatar} className="w-16 h-16 lg:w-24 lg:h-24 rounded-full shadow-md m-2" alt="User Avatar" />
                            <div className="p-4 lg:p-6">
                                <p className="text-lg">Username: {formData.username}</p>
                                <p>First Name: {formData.firstName}</p>
                                <p>Last Name: {formData.lastName}</p>
                                <button className="btn btn-primary mt-4 bg-gray-700 hover:bg-gray-900 text-white px-2 rounded" onClick={() => setIsEditing(true)}>Edit User</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};


export default Profile;