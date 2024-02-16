// import { useContext, useState, useEffect } from 'react';
// import { auth, storage } from '../../config/firebase-config';
// import { ref, uploadBytes } from "firebase/storage";
// import { updateUser } from '../../services/user-service';
// import AppContext from "../../context/AppContext";

// const ProfilePhotoUpload = () => {
//     const [image, setImage] = useState([]);

//     const { userData } = useContext(AppContext);
//     const [imageUpload, setImageUpload] = useState(null);

//     const handleFileChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };

//     //const storageRef = ref(storage, `profile_photos/${auth.currentUser.uid}`)
    
//     const uploadImage = () => {
//         // uploadBytes(storageRef, image).then(async (snapshot) => {
        
//         //     await updateUser(userData.username, {...userData, avatar: snapshot.url});
//         // });
//         if (imageUpload === null) {
//             return;
//         }
        
//         const imageRef = ref(storage, `profile_photos/${imageUpload.name + v4()}`);
//         uploadBytes(imageRef, imageUpload).then(() => {
//             alert("Image uploaded")
//         })
//     }

//     useEffect(() => {

//     }, [])
 
//     return (
//         <div>
//             <h2>Upload Profile Photo</h2>
//             <input type="file" onChange={handleFileChange} />
//             <button onClick={uploadImage}>Upload Image</button>
//         </div>
//     );
// };

// export default ProfilePhotoUpload;

import { useEffect, useState, useContext } from "react";
import { useAuth } from "../../config/firebase-config";
import { uploadAvatar } from "../../services/user-service";
import AppContext from "../../context/AppContext";

export default function Profile() {
  const currentUser = useAuth();
  const { userData } = useContext(AppContext)
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState("");

  function handleChange(e) {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0])
    }
  }

  function handleClick() {
    uploadAvatar(avatar, userData);
  }

  useEffect(() => {
    if (userData?.avatarURL) {
      setAvatarURL(userData.avatarURL);
    }
  }, [userData])

  return (
    <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={!avatar} onClick={handleClick}>Upload</button>
      <img src={avatarURL} alt="Avatar" className="avatar" />
    </div>
  );
}