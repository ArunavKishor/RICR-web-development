import React from "react";
import { useAuth } from "../../../context/AuthContext";


const EditProfileModal = ({ onClose }) => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex fixed inset-0 bg-black/80 items-center justify-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto ">
          <div></div>
          <button
            onClick={() => onClose()}
            className="bg-red-400 p-2 px-5 rounded-3xl text-white"
          >
            X
          </button>{" "}
          <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
            <div className="max-w-xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Edit Profile</h1>
                <p className="text-lg text-gray-600 italic">Do the changes which are required !</p>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <form className="p-8">
                  {/* Personal Information */}
                  <div className="mb-10">
                    <div className="space-y-4">
                      <input
                        type="fullName"
                        name="fullName"
                        className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                      // <span>{user.fullName}</span>
                      />

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                    <button
                      type="reset"
                      className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Clear Form
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg disabled:scale-100 disabled:bg-gray-300  disabled:cursor-not-allowed"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
