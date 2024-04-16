import { useEffect, useState } from "react";
import { updateUser } from "../../services/user-service";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase-config";
import PropTypes from 'prop-types';

/**
 * @param {{
 * userData: {username: string, email: string, firstName: string, lastName: string, avatarUrl: string}, 
 * setContext: function
 * }} userData
 * 
 */

const UserProfile = ({ userData, setContext }) => {

    const [formData, setFormData] = useState(userData || {})
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        if (!file) {
            setPreviewUrl(null);
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (formData.firstName.length < 4 || formData.firstName.length > 32) {
            alert('First name must be between 4 and 32 characters.');
            return;
        }

        if (formData.lastName.length < 4 || formData.lastName.length > 32) {
            alert('Last name must be between 4 and 32 characters.');
            return;
        }

        try {
            let avatarUrl = userData?.avatarUrl;
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

    };

    return (

        <div className="flex flex-col lg:flex-row w-full">
            <form onSubmit={handleSubmit} className="border border-amber-950 shadow-2xl sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5">
                <div className=" py-6 px-4 sm:p-6 flex flex-col lg:flex-col">
                    <div id="upper-part" className="flex">
                        <div id="upper-firs-column" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">Photo</label>
                                <div className="items-start flex flex-col mt-2">
                                    <div className="avatar">
                                        <div className="w-28 rounded-full">
                                            <img src={previewUrl || userData?.avatarUrl} />
                                        </div>
                                    </div>
                                    <input type="file" onChange={handleFileChange} className="file-input w-full max-w-xs mt-2" />
                                </div>
                            </div>
                        </div>
                        <div id="upper-second-column" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                        </div>
                    </div>
                    <div id="bottom-part" className="flex mt-5">
                        <div id="firs-column" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">User name</label>
                                <input type="text" name="username" value={formData?.username} onChange={handleInputChange} className="input input-bordered w-full mt-2" />
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" value={formData?.email} onChange={handleInputChange} className="input input-bordered w-full mt-2" />
                            </div>
                        </div>
                        <div id="second-column" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">First name</label>
                                <input type="text" name="firstName" value={formData?.firstName} onChange={handleInputChange} className="input input-bordered w-full mt-2" />
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">Last name</label>
                                <input type="text" name="lastName" value={formData?.lastName} onChange={handleInputChange} className="input input-bordered w-full mt-2" />
                            </div>

                        </div>
                    </div>
                    <div id="button-part" className="flex mt-5 justify-between mr-20">
                        <div></div>
                        <button type="submit" className="btn btn-outline btn-accent">Save</button>
                    </div>
                </div>
            </form>
        </div>

    );
};


UserProfile.propTypes = {
    userData: PropTypes.object,
    setContext: PropTypes.func
};


export default UserProfile;
