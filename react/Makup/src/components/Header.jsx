import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#5A0E24] text-light text-5xl justify-between flex p-2">
        <div className="font-semibold italic  ">Cheeni</div>
        <div className="flex text-lg gap-3 justify-end mt-1.5">
          <Link to={"/"} className="text-white ">
            Home
          </Link>
          <Link to={"/About"} className="text-white">
            About
          </Link>
          <Link to={"/Product"} className="text-white">
            Product
          </Link>
          <Link to={"/Contact"} className="text-white">
            Contact
          </Link>
          <Link to={"/Login"} className="text-white">
            Login
          </Link>
          <Link to={"/SignUp"} className="text-white">
            Sign-Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
