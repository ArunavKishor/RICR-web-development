import React from "react";
import tranparentLogo from "../assets/transparentLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={tranparentLogo}
            alt=""
            className="h-12 w-20 object-cover "
          />
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
          {isLogin ? (
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/user-dashboard")}
            >
              {user.fullName}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-(--secondary) py-2 px-4 font-bold hover:bg-(--secondary-hover) hover:text-white rounded "
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-(--secondary) py-2 px-4 font-bold hover:bg-(--secondary-hover) hover:text-white rounded "
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;