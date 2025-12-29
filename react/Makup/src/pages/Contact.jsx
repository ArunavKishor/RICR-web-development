import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // await fetch("https://official-joke-api.appspot.com/jokes/jhbaskdjbf");
      console.log(contactData);
      
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="container mx-auto max-w-lg  p-6 rounded-lg">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="fullName" className="w-28 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="flex-1 border-2 border-black p-2 rounded text-primary"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="email" className="w-28 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="flex-1 border-2 border-black p-2 rounded text-primary"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="phone" className="w-28 font-semibold">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="flex-1 border-2 border-black p-2 rounded text-primary"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="city" className="w-28 font-semibold">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="flex-1 border-2 border-black p-2 rounded text-primary"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="subject" className="w-28 font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="flex-1 border-2 border-black p-2 rounded text-primary"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="message" className="w-28 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="flex-1 border-2 border-black p-2 rounded text-primary h-24 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="reset"
                className="bg-red-600 text-white px-4 py-2 rounded "
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded "
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
