import React from "react";
import MainImage from "../assets/pic1.png";

const About = () => {
  return (
    <>
      <div className="container text-center font-semibold text-4xl mt-2 ">
        <span>About Us</span> <br /> 
        <div className="flex justify-center mt-2">
          <img src={MainImage} alt=""  />
        </div>
      </div>
    </>
  );
};
export default About;
