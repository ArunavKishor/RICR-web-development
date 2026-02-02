import React, { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    cfNewPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.oldPassword) {
      newErrors.oldPassword = "Old password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    }

    if (!formData.cfNewPassword) {
      newErrors.cfNewPassword = "Confirm password is required";
    }

    if (
      formData.newPassword &&
      formData.cfNewPassword &&
      formData.newPassword !== formData.cfNewPassword
    ) {
      newErrors.cfNewPassword = "Passwords do not match";
      newErrors.newPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await api.patch("/user/resetPassword", formData);
      toast.success(res.data.message);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
        <div className="flex justify-between px-6 py-4 border-b border-gray-300 items-center sticky top-0 bg-white">
          <h2 className="text-xl font-semibold text-gray-800">
            Reset Password
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 text-2xl transition"
          >
            ⊗
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">

            {/* Old Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Old Password *
              </label>

              <input
                type={showPassword.old ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
                className={`w-full border rounded-md shadow-sm p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.oldPassword ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your old password"
              />

              <button
                type="button"
                onClick={() => togglePassword("old")}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword.old ? <FaEyeSlash /> : <FaEye />}
              </button>

              {errors.oldPassword && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.oldPassword}
                </p>
              )}
            </div>

            {/* New Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password *
              </label>

              <input
                type={showPassword.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                className={`w-full border rounded-md shadow-sm p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your new password"
              />

              <button
                type="button"
                onClick={() => togglePassword("new")}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword.new ? <FaEyeSlash /> : <FaEye />}
              </button>

              {errors.newPassword && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password *
              </label>

              <input
                type={showPassword.confirm ? "text" : "password"}
                name="cfNewPassword"
                value={formData.cfNewPassword}
                onChange={handleInputChange}
                className={`w-full border rounded-md shadow-sm p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cfNewPassword ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Confirm new password"
              />

              <button
                type="button"
                onClick={() => togglePassword("confirm")}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
              </button>

              {errors.cfNewPassword && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.cfNewPassword}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-300">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⟳</span> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
