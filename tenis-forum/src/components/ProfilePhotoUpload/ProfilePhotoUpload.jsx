import React, { useState } from 'react';
import { auth, storage } from '../../config/firebase-config';
import { ref, uploadBytes } from "firebase/storage";

const ProfilePhotoUpload = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };


    const storageRef = ref(storage, `profile_photos/${auth.currentUser.uid}`)
    const uploadAvatar = async () => {
        uploadBytes(storageRef, image).then(async (snapshot) => {
        
            await updateUser(userData.username, {...userData, avatar: snapshot.url});
        });
    }

    return (
        <div>
            <h2>Upload Profile Photo</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadAvatar}>Upload</button>
        </div>
    );
};

export default ProfilePhotoUpload;
