import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading]=useState(false);

  const handelClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };
//   const Vaild=()=>
//   {
//     isVaild=true;
//     if(!/^[a-z A-z]+$/.test(fullName)){
//         isVaild=false;
//     }
//   }
  const handelSubmit = (event) => {
    event.preventDefault();
    // if(!Valid()) return;
    const data={
        fullName,
        email,
        message,
    };
    console.log(data);
    handelClearForm();
    
  };
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa velit
        error quo, optio ipsa totam a enim iusto necessitatibus consequatur
        doloribus minima quibusdam fugit recusandae ipsum architecto dolor
        obcaecati!
      </p>
      <div>
        <div>this is default Contact page </div>
      </div>
      <div className="text-center ">
        <h1>Contact Us</h1>
        <div className="container">
          <form onReset={handelClearForm} onSubmit={handelSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="border "
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="border "
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="Message">Message</label>
              <input
                type="text"
                className="border "
                id="Message"
                name="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter Your Message"
                required
              />
            </div>
            <div>
              <button type="Reset" >Reset</button>
              <button
                type="Submit"
                className="border bg-sky-700 p-2 rounded-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
