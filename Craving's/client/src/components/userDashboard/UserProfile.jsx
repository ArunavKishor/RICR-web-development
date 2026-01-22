import React from "react";
import { useAuth } from "../../context/AuthContext";
import { use } from "react";
import { useState } from "react";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth(); //geting data fron user auth
  return (
    <>
      <div className="flex gap-10">
        <div>
          <span>Name:</span>
          <span>{user.fullName}</span>
        </div>
        <div>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>Phone:</span>
          <span>{user.mobileNumber}</span>
        </div>
        <div>
          <button
            className="bg-amber-300 p-3 rounded-2xl"
            onClick={() => setIsEditProfileModalOpen(true)}
            >
            Edit Profile
          </button>
        </div>
      </div>
      {isEditProfileModalOpen && <EditProfileModal onClose ={()=>setIsEditProfileModalOpen(false)}/>}
      
    </>
  );
};

export default UserProfile;
