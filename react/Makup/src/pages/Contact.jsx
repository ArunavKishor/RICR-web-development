import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let temp = [...contactData.skill];
      if (checked) {
        temp.push(value);
      } else {
        temp = temp.filter((item) => item !== value);
      }
      setContactData((prev) => ({ ...prev, [name]: temp }));
    } else {
      setContactData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(contactData);
    setIsLoading(false);
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="container mx-auto max-w-lg p-6 rounded-lg">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Phone</label>
              <input
                type="number"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded"
              />
            </div>

            {/* City */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">City</label>
              <input
                type="text"
                name="city"
                value={contactData.city}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded"
              />
            </div>

            {/* Religion */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Religion</label>
              <select
                name="religion"
                value={contactData.religion}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded"
              >
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="sikhism">Sikhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Gender */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Gender</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={contactData.gender === "male"}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={contactData.gender === "female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={contactData.gender === "other"}
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>

            {/* Skills */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Skills</label>
              <div className="flex gap-6 flex-wrap">
                {["html", "css", "js", "react"].map((skill) => (
                  <label key={skill} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="skill"
                      value={skill}
                      checked={contactData.skill.includes(skill)}
                      onChange={handleChange}
                    />
                    {skill.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="flex items-center gap-4 mb-4">
              <label className="w-28 font-semibold">Message</label>
              <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                className="flex-1 border-2 border-black p-2 rounded h-24 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="reset"
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
