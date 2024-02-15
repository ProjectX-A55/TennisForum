// import React, { useState } from 'react';
// import { auth } from '../../../config/firebase-config';

// const ChangePasswordForm = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleChangePassword = async (e) => {
//     e.preventDefault();
  
//     if (newPassword !== confirmPassword) {
//       setError("Passwords don't match");
//       return;
//     }
  
//     console.log("Attempting to change password...");
    
//     try {
//       const user = auth.currentUser;
//       console.log("Current user:", user);
  
//       const credential = auth.EmailAuthProvider.credential(
//         user.email,
//         oldPassword
//       );
//       console.log("Credential:", credential);
  
//       await user.reauthenticateWithCredential(credential);
//       console.log("Successfully reauthenticated.");
  
//       await user.updatePassword(newPassword);
//       console.log("Password updated successfully!");
      
//       alert('Password updated successfully!');
//       setOldPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//     } catch (err) {
//       setError(err.message);
//       console.error("Error updating password:", err);
//     }
//   };

//   return (
//     <div>
//       <h2>Change Password</h2>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleChangePassword}>
//         <div>
//           <label htmlFor="oldPassword">Current Password:</label>
//           <input
//             type="password"
//             id="oldPassword"
//             value={oldPassword}
//             onChange={(e) => setOldPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="newPassword">New Password:</label>
//           <input
//             type="password"
//             id="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm New Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Update Password</button>
//       </form>
//     </div>
//   );
// };

// export default ChangePasswordForm;
