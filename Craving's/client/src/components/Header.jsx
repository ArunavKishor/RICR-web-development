import React from "react";
import tranparentLogo from "../assets/logotransparent.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-(--primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={tranparentLogo}
            alt=""
            className="h-12 w-20 object-cover invert-100"
          />
          <h1 className="text-white ml-2">Craving's</h1>
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--accent)"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/Login")}
            className="bg-(--secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Register")}
            className=" bg-(--secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded "
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
