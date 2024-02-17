import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { updateUser } from "../../services/user-service";
import ProfilePhotoUpload from "../ProfilePhotoUpload/ProfilePhotoUpload";
import FieldsContainer from "./FieldsContainer";

const Profile = () => {

    const { userData } = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(userData)
    const [previewUrl, setPreviewUrl] = useState(null);

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


    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        setPreviewUrl(URL.createObjectURL(file)); // Add this line
        const storage = getStorage();
        const storageRef = ref(storage, 'avatars/' + file.name);
    
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on('state_changed',
            (error) => {
                console.error('Upload failed:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
    
                    setFormData({ ...formData, avatar: downloadURL });
                    updateUser(userData.username, { ...userData, avatar: downloadURL });
                });
            }
        );
    };

    return (
        <div>
            {isEditing ? (
                <div className="relative w-full flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="w-full p-6 m-auto bg-gray rounded-lg shadow-2xl ring-2 ring-white lg:max-w-xl border border-amber-950">
                    <div className="mb-4">
                        <label className="block mb-2">Edit First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input input-bordered" />
                    </div>
        
                    <div className="mb-4">
                        <label className="block mb-2">Edit Avatar:</label>
                        <input type="file" onChange={handleFileUpload} className="file-input file-input-bordered w-full max-w-xs mt-2" />
                        {previewUrl && <img  className="rounded-md" src={previewUrl} alt="Preview" />}
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
                        <div className="flex justify-center"><img src={formData.avatar} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg m-4" alt="User Avatar" /></div>
                        
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
                                <FieldsContainer>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input input-bordered" />
                                    </FieldsContainer>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2">Last Name:</label>
                                <FieldsContainer>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full input input-bordered" />
                                    </FieldsContainer>
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