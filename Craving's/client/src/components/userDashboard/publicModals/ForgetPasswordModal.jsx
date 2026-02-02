import React, { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    cfNewPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const [showField, setShowField] = useState({
    otp: false,
    newPassword: false,
    cfNewPassword: false,
  });

  const toggleField = (field) => {
    setShowField((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validatePasswords = () => {
    let newErrors = {};

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
      newErrors.newPassword = "Passwords do not match";
      newErrors.cfNewPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;

      if (isOtpSent) {
        if (isOtpVerified) {
          if (!validatePasswords()) {
            setLoading(false);
            return;
          }

          res = await api.post("/auth/forgetPasword", formData);
          toast.success(res.data.message);
          onClose();
        } else {
          res = await api.post("/auth/verifyOtp", formData);
          toast.success(res.data.message);
          setIsOtpVerified(true);
        }
      } else {
        res = await api.post("/auth/genOtp", formData);
        toast.success(res.data.message);
        setIsOtpSent(true);
      }
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
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
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

        <form onSubmit={handleSubmit} className="p-5">
          <div className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded-md shadow-sm p-2 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your registered email"
                disabled={isOtpSent}
              />
            </div>

            {/* OTP */}
            {isOtpSent && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OTP *
                </label>
                <input
                  type={showField.otp ? "text" : "password"}
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className="w-full border rounded-md shadow-sm p-2 pr-10 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter OTP received in email"
                  disabled={isOtpVerified}
                />
                <button
                  type="button"
                  onClick={() => toggleField("otp")}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showField.otp ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            )}

            {/* Passwords */}
            {isOtpSent && isOtpVerified && (
              <div className="space-y-5">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password *
                  </label>
                  <input
                    type={showField.newPassword ? "text" : "password"}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 pr-10 focus:outline-none focus:ring-2 ${
                      errors.newPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => toggleField("newPassword")}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                  >
                    {showField.newPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.newPassword && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.newPassword}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password *
                  </label>
                  <input
                    type={showField.cfNewPassword ? "text" : "password"}
                    name="cfNewPassword"
                    value={formData.cfNewPassword}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md shadow-sm p-2 pr-10 focus:outline-none focus:ring-2 ${
                      errors.cfNewPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    onClick={() => toggleField("cfNewPassword")}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                  >
                    {showField.cfNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.cfNewPassword && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.cfNewPassword}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex justify-center mt-5">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">
                    <BsArrowClockwise />
                  </span>
                  Loading...
                </>
              ) : isOtpSent ? (
                isOtpVerified ? "Update Password" : "Verify OTP"
              ) : (
                "Send OTP"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
