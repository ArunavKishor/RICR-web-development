import React from "react";

const EditProfileModal = ({onClose}) => {
  return (
     <>
        <div>EditProfileModal</div>
        <button onClick={()=> onClose()} className="bg-red-400 p-2 px-5 rounded-3xl">X</button>
    </>
  )
};

export default EditProfileModal;
