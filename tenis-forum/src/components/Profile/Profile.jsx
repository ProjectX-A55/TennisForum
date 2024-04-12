import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { updateUser } from "../../services/user-service";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase-config";

const Profile = () => {

    const { userData, setContext } = useContext(AppContext)

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

    };

    console.log(formData)
    return (
        // <div>
        //     {isEditing ? (
        //         <div className="relative w-full flex flex-col justify-center">
        //             <form onSubmit={handleSubmit} className="w-full p-6 m-auto bg-gray rounded-lg shadow-2xl ring-2 ring-white lg:max-w-xl border border-amber-950">
        //                 <div className="flex justify-center">
        //                     <img src={userData.avatarUrl} className="w-24 h-24 lg:w-24 lg:h-24 rounded-full shadow-lg m-4" alt="User Avatar" />
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block mb-2">Edit Avatar:</label>
        //                     <input type="file" onChange={handleFileChange} className="file-input w-full max-w-xs" />
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block mb-2">Edit First Name:</label>
        //                     <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full input input-bordered" />
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block mb-2">Edit Last Name:</label>
        //                     <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full input input-bordered" />
        //                 </div>
        //                 <div className="flex justify-between">
        //                     <button type="submit" className="btn btn-primary w-1/2 pr-2 text-center">Save</button>
        //                     <button type="submit" className="btn btn-primary w-1/2 pl-2 ml-2 mr-2 text-center">Back</button>
        //                 </div>
        //             </form>
        //         </div>
        //     ) : (
        //         <div className="relative w-full flex flex-col justify-center border">
        //             <div className="w-full p-6 m-auto bg-gray rounded-lg border border-amber-950 shadow-2xl ring-2 ring-white lg:max-w-xl">
        //                 <div className="flex justify-center">
        //                     <img src={userData.avatarUrl} className="w-24 h-24 lg:w-24 lg:h-24 rounded-full shadow-lg m-4" alt="User Avatar" />
        //                 </div>
        //                 <div className="p-4 lg:p-6">
        //                     <div className="mb-4 " >
        //                         <label className="block mb-2">Username:</label>
        //                         <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
        //                             {userData.username}
        //                         </div>
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block mb-2">Email:</label>
        //                         <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
        //                             {userData.email}
        //                         </div>
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block mb-2">First Name:</label>
        //                         <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
        //                             {userData?.firstName}
        //                         </div>
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block mb-2">Last Name:</label>
        //                         <div className="w-full p-2 m-auto bg-gray rounded-lg shadow-lg ring-2 ring-white lg:max-w-xl border border-amber-950">
        //                             {userData?.lastName}
        //                         </div>
        //                     </div>
        //                     <button className="btn btn-primary w-full mt-7" onClick={() => setIsEditing(true)}>Edit Profile</button>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>
        <div className="flex flex-col lg:flex-row">
            <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:w-1/6 ml-5 mb-5 lg:mb-0">
                <div className="">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </aside>
            <form onSubmit={handleSubmit} className="bg-base-300 shadow sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5">
                <div className=" py-6 px-4 sm:p-6 flex flex-col lg:flex-col">
                    <div id="upper-part" className="flex">
                        <div id="upper-firs-column" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">Photo</label>
                                <div className="items-start flex flex-col mt-2">
                                    <div className="avatar">
                                        <div className="w-28 rounded-full">
                                            <img src={userData?.avatarUrl} />
                                        </div>
                                    </div>
                                    <input type="file" onChange={handleFileChange} className="file-input w-full max-w-xs" />
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
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div id="second-column" className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">First name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="input input-bordered w-full" />
                            </div>
                            <div className="flex flex-col w-3/4">
                                <label htmlFor="">Last name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="input input-bordered w-full" />
                            </div>

                        </div>
                    </div>
                    <div id="button-part" className="flex mt-5 justify-between mr-10">
                        <div></div>
                        <button type="submit" className="btn btn-accent mr-9">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );

};


export default Profile;