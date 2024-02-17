import { useEffect, useState, useContext } from "react";

import { uploadAvatar } from "../../services/user-service";
import AppContext from "../../context/AppContext";

export default function Profile() {
  
  const { userData } = useContext(AppContext)
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState("");
import { uploadAvatar, updateUser, getUserByUserName } from "../../services/user-service";
import AppContext from "../../context/AppContext";

export default function ProfilePhotoUpload() {
    const { userData } = useContext(AppContext)
    const [avatar, setAvatar] = useState(null);
    const [avatarURL, setAvatarURL] = useState("https://static.thenounproject.com/png/989418-200.png");

    function handleChange(e) {
        if (e.target.files[0]) {
            setAvatar(e.target.files[0])
        }
    }

    const handleClick = async () => {
        try {
            const downloadURL = await uploadAvatar(userData.name, avatar);

            await updateUser(userData.username, { avatarURL: downloadURL });
            setAvatar(downloadURL);
        }
        catch (e) {
            console.error(e);
        }
    }

  return (
    // <div className="fields">
    //   <input type="file" onChange={handleChange} />
    //   <button disabled={!avatar} onClick={handleClick}>Upload</button>
    //   <img src={avatarURL} alt="Avatar" className="avatar" />
    // </div>
    <>
    </>
  );
    useEffect(() => {
        const fetchData = async () => {

            const userProfile = await getUserByUserName(userData.username);

            if (userProfile.exists()) {
                const profileData = userProfile.val();
                if (profileData.avatarURL) {
                    setAvatarURL(profileData.avatarURL);
                }
            }
        }
        fetchData();
    }, [userData])

    return (
        <div className="fields">
            <input type="file" onChange={handleChange} />
            <button disabled={!avatar} onClick={handleClick}>Upload</button>
            {!userData.avatarURL && <img src={avatarURL} alt="Avatar" className="avatar" />}
        </div>
    );
}