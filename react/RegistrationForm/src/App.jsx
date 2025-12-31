import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    qualification: "",
    percentage: "",
    course: "",
    batch: "",
    address: "",
    city: "",
    pincode: "",
    guardianName: "",
    guardianMobile: "",
    source: "",
    specialReq: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      mobile: "",
      dob: "",
      qualification: "",
      percentage: "",
      course: "",
      batch: "",
      address: "",
      city: "",
      pincode: "",
      guardianName: "",
      guardianMobile: "",
      source: "",
      specialReq: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", contactData);
    handleClearForm();
  };

  return (
    <BrowserRouter>
      {/* Header */}
      <div className="bg-[#5A0E24] text-white text-5xl flex justify-between p-2">
        <div className="font-semibold italic">Cheeni</div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-2xl mx-auto p-6">
              <h1 className="text-3xl font-bold text-center mb-6">
                Coaching Institute Registration
              </h1>

              <form
                onSubmit={handleSubmit}
                onReset={handleClearForm}
                className="space-y-4"
              >
                {[
                  ["Full Name", "fullName"],
                  ["Email", "email"],
                  ["Mobile", "mobile"],
                  ["Percentage / Grade", "percentage"],
                  ["City", "city"],
                  ["Pin Code", "pincode"],
                  ["Guardian Name", "guardianName"],
                  ["Guardian Mobile", "guardianMobile"],
                ].map(([label, name]) => (
                  <div key={name} className="flex gap-4 items-center">
                    <label className="w-48 font-semibold">{label}</label>
                    <input
                      name={name}
                      value={contactData[name]}
                      onChange={handleChange}
                      className="flex-1 border border-black p-2 rounded-md"
                    />
                  </div>
                ))}

                {/* DOB */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={contactData.dob}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  />
                </div>

                {/* Qualification */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">Qualification</label>
                  <select
                    name="qualification"
                    value={contactData.qualification}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  >
                    <option value="">Select</option>
                    <option>10th</option>
                    <option>12th</option>
                    <option>Graduate</option>
                    <option>Postgraduate</option>
                  </select>
                </div>

                {/* Course */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">Preferred Course</label>
                  <select
                    name="course"
                    value={contactData.course}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  >
                    <option value="">Select</option>
                    <option>IIT-JEE</option>
                    <option>NEET</option>
                    <option>UPSC</option>
                    <option>Banking</option>
                  </select>
                </div>

                {/* Batch */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">Batch Timing</label>
                  <select
                    name="batch"
                    value={contactData.batch}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  >
                    <option value="">Select</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Weekend</option>
                  </select>
                </div>

                {/* Address (changed from textarea to input) */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">
                    Residential Address
                  </label>
                  <input
                    name="address"
                    value={contactData.address}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  />
                </div>

                {/* Source */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">
                    How did you hear about us?
                  </label>
                  <select
                    name="source"
                    value={contactData.source}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  >
                    <option value="">Select</option>
                    <option>Friends</option>
                    <option>Online Ad</option>
                    <option>Newspaper</option>
                    <option>Social Media</option>
                  </select>
                </div>

                {/* Special Requirements (changed from textarea to input) */}
                <div className="flex gap-4 items-center">
                  <label className="w-48 font-semibold">
                    Special Requirements
                  </label>
                  <input
                    name="specialReq"
                    value={contactData.specialReq}
                    onChange={handleChange}
                    className="flex-1 border border-black p-2 rounded-md"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    type="reset"
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
