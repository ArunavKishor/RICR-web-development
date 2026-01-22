import React from "react";

const EditProfileModal = ({ onClose }) => {
  return (
    <>
      <div className="flex fixed inset-0 bg-black/80 items-center justify-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto ">
          <div>Edit Profile</div>
          <button
            onClick={() => onClose()}
            className="bg-red-400 p-2 px-5 rounded-3xl text-white"
          >
            X
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
